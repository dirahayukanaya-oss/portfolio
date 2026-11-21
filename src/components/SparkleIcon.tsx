import React from 'react';

interface SparkleIconProps {
  className?: string;
}

export const SparkleIcon: React.FC<SparkleIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    aria-hidden="true"
    className={`fill-current shrink-0 ${className}`}
    viewBox="0 0 24 24"
  >
    <path d="M12 1L14.8 9.2L23 12L14.8 14.8L12 23L9.2 14.8L1 12L9.2 9.2L12 1Z" />
  </svg>
);
