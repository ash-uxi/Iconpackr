import React from 'react';

/**
 * PiCloudMoonDuoStroke icon from the duo-stroke style in weather category.
 */
interface PiCloudMoonDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudMoonDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-moon icon',
  ...props
}: PiCloudMoonDuoStrokeProps): JSX.Element {
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
      <path d="M20 8C20.7285 8 21.4116 7.80524 21.9999 7.46493L22 7.5C22 10.0554 20.2573 12.2037 17.8955 12.8214C17.479 12.4149 16.9883 12.0841 16.4456 11.8511C15.7 9.61325 13.5884 7.99979 11.1 7.99979C11.0741 7.99979 11.0483 7.99996 11.0224 8.00031C11.0076 7.83553 11 7.66865 11 7.5C11 4.46243 13.4624 2 16.5 2L16.5351 2.00011C16.1948 2.58843 16 3.27147 16 4C16 6.20914 17.7909 8 20 8Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M5.49134 13.222C5.70385 10.6965 7.64068 8.44416 10.2795 8.05908C10.5473 8.01999 10.8213 7.99976 11.1 7.99976C13.5884 7.99976 15.7 9.61322 16.4457 11.8511C18.1439 12.5802 19.3333 14.2678 19.3333 16.2331C19.3333 18.8656 17.1992 20.9998 14.5667 20.9998H5.9C3.74609 20.9998 2 19.2537 2 17.0998C2 15.0872 3.52435 13.4308 5.48144 13.222H5.49134ZM5.49134 13.222C5.44399 13.7846 5.48225 14.3609 5.61741 14.9331" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
