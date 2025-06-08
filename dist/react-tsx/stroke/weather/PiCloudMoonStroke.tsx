import React from 'react';

/**
 * PiCloudMoonStroke icon from the stroke style in weather category.
 */
interface PiCloudMoonStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudMoonStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-moon icon',
  ...props
}: PiCloudMoonStrokeProps): JSX.Element {
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
      <path d="M5.61741 14.9331C5.48225 14.3609 5.444 13.7847 5.49134 13.222M17.8955 12.8214C17.479 12.4149 16.9883 12.0841 16.4457 11.8511C15.7 9.61325 13.5884 7.99979 11.1 7.99979C11.0741 7.99979 11.0483 7.99996 11.0225 8.00031M17.8955 12.8214C18.7826 13.6871 19.3333 14.8958 19.3333 16.2331C19.3333 18.8657 17.1992 20.9998 14.5667 20.9998H5.9C3.74609 20.9998 2 19.2537 2 17.0998C2 15.0873 3.52435 13.4308 5.48144 13.222H5.49134M17.8955 12.8214C20.2573 12.2037 22 10.0554 22 7.5L21.9999 7.46493C21.4116 7.80524 20.7285 8 20 8C17.7909 8 16 6.20914 16 4C16 3.27147 16.1948 2.58843 16.5351 2.00011L16.5 2C13.4624 2 11 4.46243 11 7.5C11 7.66865 11.0076 7.83553 11.0225 8.00031M11.0225 8.00031C10.7705 8.00371 10.5224 8.02366 10.2795 8.05912C7.64068 8.44419 5.70385 10.6965 5.49134 13.222" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
