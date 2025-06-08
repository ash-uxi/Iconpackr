import React from 'react';

/**
 * PiKeySlantStroke icon from the stroke style in security category.
 */
interface PiKeySlantStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeySlantStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'key-slant icon',
  ...props
}: PiKeySlantStrokeProps): JSX.Element {
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
      <path d="M10.1107 12.8284C11.6728 14.3905 11.6728 16.9232 10.1107 18.4853C8.54856 20.0474 6.0159 20.0474 4.4538 18.4853C2.8917 16.9232 2.8917 14.3905 4.4538 12.8284C6.0159 11.2663 8.54856 11.2663 10.1107 12.8284ZM10.1107 12.8284L18.5959 4.34314L20.7173 6.46446M15.7675 7.17157L17.1817 8.58578" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
