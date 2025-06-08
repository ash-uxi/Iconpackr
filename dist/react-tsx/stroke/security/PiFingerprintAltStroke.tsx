import React from 'react';

/**
 * PiFingerprintAltStroke icon from the stroke style in security category.
 */
interface PiFingerprintAltStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFingerprintAltStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fingerprint-alt icon',
  ...props
}: PiFingerprintAltStrokeProps): JSX.Element {
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
      <path d="M17.5 3.64702C15.9221 2.60596 14.0318 2 12 2C9.96818 2 8.0779 2.60596 6.5 3.64702M17 20.6622C15.5291 21.513 13.8214 22 12 22C10.1786 22 8.47087 21.513 7 20.6622" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M4 8.69214C6.00554 6.76092 8.84794 5.55566 12 5.55566C15.1521 5.55566 17.9945 6.76092 20 8.69214" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M5.07107 17C4.1215 11.7389 7.79163 9 12.0002 9C14.2628 9 16.2747 10.0735 17.5543 11.7389C19.9833 14.9002 15.9406 18.174 13.5568 14.3412C12.458 12.5745 10.0624 12.7451 9.02995 13.8461C7.93422 15.0146 8.01507 17.9004 11.0002 18.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
