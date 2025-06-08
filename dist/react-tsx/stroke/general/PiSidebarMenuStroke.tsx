import React from 'react';

/**
 * PiSidebarMenuStroke icon from the stroke style in general category.
 */
interface PiSidebarMenuStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSidebarMenuStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'sidebar-menu icon',
  ...props
}: PiSidebarMenuStrokeProps): JSX.Element {
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
      <path d="M6 8H6.01M6 12H6.01M6 16H6.01M9 3.01105C9.57703 3 10.2365 3 11 3H13C15.8003 3 17.2004 3 18.27 3.54497C19.2108 4.02433 19.9757 4.78924 20.455 5.73005C21 6.79961 21 8.19974 21 11V13C21 15.8003 21 17.2004 20.455 18.27C19.9757 19.2108 19.2108 19.9757 18.27 20.455C17.2004 21 15.8003 21 13 21H11C10.2365 21 9.57703 21 9 20.989M9 3.01105C7.46078 3.04052 6.50797 3.14859 5.73005 3.54497C4.78924 4.02433 4.02433 4.78924 3.54497 5.73005C3 6.79961 3 8.19974 3 11V13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.50797 20.8514 7.46078 20.9595 9 20.989M9 3.01105V20.989" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
