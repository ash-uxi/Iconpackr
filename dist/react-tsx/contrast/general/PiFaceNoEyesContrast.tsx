import React from 'react';

/**
 * PiFaceNoEyesContrast icon from the contrast style in general category.
 */
interface PiFaceNoEyesContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceNoEyesContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'face-no-eyes icon',
  ...props
}: PiFaceNoEyesContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 1 18.3 0 9.15 9.15 0 0 1-18.3 0" opacity=".28"/>
  <path d="M8.43 14.5A4.99 4.99 0 0 0 12 16a4.99 4.99 0 0 0 3.57-1.5M12 21.15a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3"/>
    </svg>
  );
}
