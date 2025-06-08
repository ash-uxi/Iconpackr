import React from 'react';

/**
 * PiStopBigContrast icon from the contrast style in media category.
 */
interface PiStopBigContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStopBigContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'stop-big icon',
  ...props
}: PiStopBigContrastProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M6 9.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 6 8.08 6 9.2 6h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 7.52 18 8.08 18 9.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C16.48 18 15.92 18 14.8 18H9.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C6 16.48 6 15.92 6 14.8z"/>
  <path fill="currentColor" d="M6 9.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 6 8.08 6 9.2 6h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 7.52 18 8.08 18 9.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C16.48 18 15.92 18 14.8 18H9.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C6 16.48 6 15.92 6 14.8z" opacity=".28"/>
    </svg>
  );
}
