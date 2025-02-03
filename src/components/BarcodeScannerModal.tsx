import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import jsQR from 'jsqr';

interface BarcodeScannerModalProps {
  onClose: () => void;
}

export default function BarcodeScannerModal({ onClose }: BarcodeScannerModalProps) {
  const { t } = useLanguage();
  const [scanResult, setScanResult] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraActive, setCameraActive] = useState(false);

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleStopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCameraActive(false);
    }
  };

  const analyzeBarcode = (barcode: string): string => {
    // Placeholder for basic analysis logic
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

  const handleScan = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          setScanResult(`Barcode scanned: ${code.data}`);
          window.open(`https://www.google.com/search?q=${code.data}`, '_blank');
        } else {
          setScanResult('No barcode detected. Please try again.');
        }
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
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
              const code = jsQR(imageData.data, imageData.width, imageData.height);
              if (code) {
                setScanResult(`Barcode scanned: ${code.data}`);
                window.open(`https://www.google.com/search?q=${code.data}`, '_blank');
              } else {
                setScanResult('No barcode detected in the image. Please try again.');
                // Perform Google Image Search
                const imageUrl = event.target?.result as string;
                window.open(`https://www.google.com/searchbyimage?image_url=${encodeURIComponent(imageUrl)}`, '_blank');
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
          <h2 className="text-xl font-bold">Barcode Scanner</h2>
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

        {cameraActive && (
          <div className="mb-4">
            <video ref={videoRef} autoPlay playsInline className="w-full aspect-video bg-gray-100 rounded-md"></video>
            <canvas ref={canvasRef} className="hidden"></canvas>
            <button
              onClick={handleScan}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
            >
              Scan Barcode
            </button>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </div>

        {scanResult && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p className="text-gray-700">{scanResult}</p>
          </div>
        )}
      </div>
    </div>
  );
}
