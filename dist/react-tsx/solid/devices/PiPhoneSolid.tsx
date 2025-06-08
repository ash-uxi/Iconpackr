import React from 'react';

/**
 * PiPhoneSolid icon from the solid style in devices category.
 */
interface PiPhoneSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPhoneSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'phone icon',
  ...props
}: PiPhoneSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M11.3572 1H12.6428C13.7266 0.99999 14.6007 0.999983 15.3086 1.05782C16.0375 1.11737 16.6777 1.24318 17.27 1.54497C18.2108 2.02434 18.9757 2.78924 19.455 3.73005C19.7568 4.32234 19.8826 4.96253 19.9422 5.69138C20 6.39926 20 7.27342 20 8.35722V15.6428C20 16.7266 20 17.6007 19.9422 18.3086C19.8826 19.0375 19.7568 19.6777 19.455 20.27C18.9757 21.2108 18.2108 21.9757 17.27 22.455C16.6777 22.7568 16.0375 22.8826 15.3086 22.9422C14.6008 23 13.7267 23 12.6429 23H11.3572C10.2734 23 9.39923 23 8.69138 22.9422C7.96253 22.8826 7.32234 22.7568 6.73005 22.455C5.78924 21.9757 5.02433 21.2108 4.54497 20.27C4.24318 19.6777 4.11737 19.0375 4.05782 18.3086C3.99998 17.6007 3.99999 16.7266 4 15.6428V8.35719C3.99999 7.27341 3.99998 6.39925 4.05782 5.69138C4.11737 4.96253 4.24318 4.32234 4.54497 3.73005C5.02433 2.78924 5.78924 2.02434 6.73005 1.54497C7.32234 1.24318 7.96253 1.11737 8.69138 1.05782C9.39925 0.999983 10.2734 0.99999 11.3572 1ZM12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20H12.01C12.5623 20 13.01 19.5523 13.01 19C13.01 18.4477 12.5623 18 12.01 18H12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
