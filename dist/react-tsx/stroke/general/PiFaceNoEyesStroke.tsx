import React from 'react';

/**
 * PiFaceNoEyesStroke icon from the stroke style in general category.
 */
interface PiFaceNoEyesStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceNoEyesStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'face-no-eyes icon',
  ...props
}: PiFaceNoEyesStrokeProps): JSX.Element {
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
      <path d="M8.42932 14.4995C9.33678 15.4252 10.6013 15.9995 12 15.9995C13.3987 15.9995 14.6633 15.4252 15.5708 14.4995M12.0001 21.1496C6.94669 21.1496 2.8501 17.053 2.8501 11.9996C2.8501 6.94621 6.94669 2.84961 12.0001 2.84961C17.0535 2.84961 21.1501 6.94621 21.1501 11.9996C21.1501 17.053 17.0535 21.1496 12.0001 21.1496Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
