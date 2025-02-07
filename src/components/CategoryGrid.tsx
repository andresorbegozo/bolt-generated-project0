import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Globe, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Store } from '../types';

interface CategoryGridProps {
  title: string;
  stores: Store[];
}

export default function CategoryGrid({ title, stores }: CategoryGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragThreshold, setDragThreshold] = useState(5);
  const [hasMoved, setHasMoved] = useState(false);

  const checkScroll = () => {
    if (gridRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    checkScroll();
    window.addEventListener('resize', checkScroll);

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!gridRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - gridRef.current.offsetLeft);
    setScrollLeft(gridRef.current.scrollLeft);
    gridRef.current.style.cursor = 'grabbing';
    gridRef.current.style.userSelect = 'none';
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!gridRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.touches[0].pageX - gridRef.current.offsetLeft);
    setScrollLeft(gridRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !gridRef.current) return;
    e.preventDefault();
    const x = e.pageX - gridRef.current.offsetLeft;
    const distance = x - startX;
    
    if (Math.abs(distance) > dragThreshold) {
      setHasMoved(true);
      gridRef.current.scrollLeft = scrollLeft - distance;
      checkScroll();
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !gridRef.current) return;
    const x = e.touches[0].pageX - gridRef.current.offsetLeft;
    const distance = x - startX;
    
    if (Math.abs(distance) > dragThreshold) {
      setHasMoved(true);
      gridRef.current.scrollLeft = scrollLeft - distance;
      checkScroll();
    }
  };

  const stopDragging = () => {
    setIsDragging(false);
    if (gridRef.current) {
      gridRef.current.style.cursor = 'grab';
      gridRef.current.style.removeProperty('user-select');
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (gridRef.current) {
      const scrollAmount = direction === 'left' ? -240 : 240;
      gridRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 100);
    }
  };

  useEffect(() => {
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('touchend', stopDragging);
    return () => {
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchend', stopDragging);
    };
  }, []);

  if (!stores || stores.length === 0) {
    return null;
  }

  return (
    <section 
      className={`relative transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} 
      aria-labelledby={`category-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <h2 
        id={`category-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-6 text-gray-800 flex items-center gap-2 px-4"
      >
        {title}
        <span className="text-xs md:text-sm font-normal text-gray-500">
          ({stores.length} businesses)
        </span>
      </h2>
      
      <div className="relative px-4 pt-2"> {/* Added pt-2 to create space */}
        {showLeftScroll && (
          <div className="absolute left-0 top-0 bottom-4 w-12 z-[1] pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 100%)'
            }}
          />
        )}
        
        {showLeftScroll && (
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-[3] bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-lg hover:shadow-xl transition-all"
            aria-label={`Scroll ${title} items left`}
            style={{ top: '50%', bottom: 'auto' }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
        )}
        
        {showRightScroll && (
          <div className="absolute right-0 top-0 bottom-4 w-12 z-[1] pointer-events-none"
            style={{
              background: 'linear-gradient(to left, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 100%)'
            }}
          />
        )}
        
        {showRightScroll && (
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-[3] bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-lg hover:shadow-xl transition-all"
            aria-label={`Scroll ${title} items right`}
            style={{ top: '50%', bottom: 'auto' }}
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        )}

        <div 
          ref={gridRef}
          className={`grid grid-flow-col auto-cols-[240px] sm:auto-cols-[280px] md:auto-cols-[300px] lg:auto-cols-[320px] gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 ${
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={stopDragging}
          onScroll={checkScroll}
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory',
            scrollBehavior: isDragging ? 'auto' : 'smooth'
          }}
        >
          {stores.map((store) => (
            <a
              key={store.id}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (hasMoved) {
                  e.preventDefault();
                }
              }}
              className="group relative block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full focus:outline-none focus:ring-2 focus:ring-red-500 active:scale-[0.98] touch-manipulation scroll-snap-align-start z-[2] border border-gray-100/50"
              aria-label={`Visit ${store.name} website`}
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={store.image}
                  alt={`${store.name} storefront or products`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).classList.add('loaded');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2">
                    {store.name}
                  </h3>
                  <Globe className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors flex-shrink-0" aria-hidden="true" />
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-sm text-gray-600">{store.location}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-sm text-gray-600 line-clamp-2">{store.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
