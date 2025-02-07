import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import jsQR from 'jsqr';
import Quagga from 'quagga';

interface BarcodeScannerModalProps {
  onClose: () => void;
}

export default function BarcodeScannerModal({ onClose }: BarcodeScannerModalProps) {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);

  useEffect(() => {
    if (cameraActive && videoRef.current) {
      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: videoRef.current,
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment" // Use 'environment' for back camera on mobile
          }
        },
        decoder: {
          readers: ["ean_reader", "code_128_reader"]
        }
      }, (err) => {
        if (err) {
          console.error("QuaggaJS initialization error:", err);
          setCameraError(`QuaggaJS initialization error: ${err.message}`);
          return;
        }
        Quagga.start();
      });

      Quagga.onDetected((data) => {
        if (data.codeResult && data.codeResult.code) {
          const barcode = data.codeResult.code;
          setScanResult(`UPC Scanned: ${barcode}`);
          window.open(`https://www.google.com/search?q=${barcode}`, '_blank');
          Quagga.stop();
          setCameraActive(false);
        }
      });

      return () => {
        Quagga.offDetected();
        Quagga.stop();
      };
    }
  }, [cameraActive]);

  const handleStartCamera = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (error: any) {
      console.error('Error accessing camera:', error);
      setCameraError(`Error accessing camera: ${error.message}`);
      setCameraActive(false);
    }
  };

  const handleStopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCameraActive(false);
      Quagga.stop();
    }
  };

  const analyzeBarcode = (barcode: string): string => {
    const barcodeLower = barcode.toLowerCase();
    let canadianOwned = 'No';
    let canadianHeadquartered = 'No';
    let canadianMajorityInvested = 'No';
    let productionInCanada = '0%';

    if (barcodeLower.startsWith('0') || barcodeLower.startsWith('1') || barcodeLower.startsWith('6') || barcodeLower.startsWith('7')) {
      canadianOwned = 'Maybe';
      canadianHeadquartered = 'Maybe';
      canadianMajorityInvested = 'Maybe';
      productionInCanada = 'Maybe';
    } else if (barcodeLower.startsWith('3')) {
      canadianHeadquartered = 'Maybe';
      productionInCanada = 'Maybe';
    }

    return `Canadian Owned: ${canadianOwned}, Canadian Headquartered: ${canadianHeadquartered}, Canadian Majority Invested: ${canadianMajorityInvested}, Production in Canada: ${productionInCanada}`;
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadStatus('Image uploaded, analyzing...');
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            if (context) {
              canvas.width = img.width;
              canvas.height = img.height;
              context.drawImage(img, 0, 0, img.width, img.height);
              const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
              const code = jsQR(imageData.data, imageData.width, canvas.height);
              if (code) {
                const analysisResult = analyzeBarcode(code.data);
                setScanResult(`Barcode scanned: ${code.data}<br/>${analysisResult}`);
                window.open(`https://www.google.com/search?q=${code.data}`, '_blank');
                setUploadStatus(null);
              } else {
                setScanResult('No barcode detected in the image. Performing image search...');
                const imageUrl = event.target?.result as string;
                window.open(`https://www.google.com/searchbyimage?image_url=${encodeURIComponent(imageUrl)}`, '_blank');
                setUploadStatus(null);
              }
            }
          }
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Product Scanner</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mb-4">
          {!cameraActive ? (
            <button
              onClick={handleStartCamera}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
            >
              Start Camera
            </button>
          ) : (
            <button
              onClick={handleStopCamera}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
            >
              Stop Camera
            </button>
          )}
        </div>

        {cameraError && (
          <div className="text-red-500 mb-4">
            {cameraError}
          </div>
        )}

        {cameraActive && (
          <div className="mb-4">
            <video ref={videoRef} autoPlay playsInline className="w-full aspect-video bg-gray-100 rounded-md"></video>
            <canvas ref={canvasRef} className="hidden"></canvas>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/webp"
            onChange={handleImageUpload}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </div>
        {uploadStatus && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p className="text-gray-700">{uploadStatus}</p>
          </div>
        )}
        {scanResult && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md" dangerouslySetInnerHTML={{ __html: scanResult }}>
          </div>
        )}
      </div>
    </div>
  );
}
