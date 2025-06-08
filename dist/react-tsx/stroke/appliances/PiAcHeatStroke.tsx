import React from 'react';

/**
 * PiAcHeatStroke icon from the stroke style in appliances category.
 */
interface PiAcHeatStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcHeatStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-heat icon',
  ...props
}: PiAcHeatStrokeProps): JSX.Element {
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
      <path d="M18 8H16M22 12V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V12H22ZM17.2367 15C18.9127 16.5325 19.8157 17.6013 19.8157 19.4211C19.8157 20.8108 18.64 22 17.2367 22C15.8334 22 14.6578 20.8108 14.6578 19.4211C14.6578 18.9963 14.8173 18.5759 15.0262 18.3158C16.9332 19.6308 18.5055 17.1874 17.2367 15Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
