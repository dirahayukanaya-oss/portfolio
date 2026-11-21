import React, { useState } from 'react';
import { User } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  fallbackBgClass?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  caption = 'Kanaya Dirahayu',
  className = '',
  fallbackBgClass = 'bg-[#E6DFD1]',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-6 text-center ${fallbackBgClass} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-16 h-16 border-2 border-[#141414]/30 flex items-center justify-center mb-3 bg-[#F3EFE4]/70">
          <User className="w-8 h-8 text-[#2B4230]" strokeWidth={1.75} />
        </div>
        <span className="font-editorial text-lg font-bold text-[#141414]">{caption}</span>
        <span className="text-xs text-[#434842] mt-1">Editorial Portrait</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
};
