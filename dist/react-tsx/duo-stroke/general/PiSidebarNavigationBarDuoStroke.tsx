import React from 'react';

/**
 * PiSidebarNavigationBarDuoStroke icon from the duo-stroke style in general category.
 */
interface PiSidebarNavigationBarDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSidebarNavigationBarDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'sidebar-navigation-bar icon',
  ...props
}: PiSidebarNavigationBarDuoStrokeProps): JSX.Element {
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
      <path d="M3.01105 9C3 9.57703 3 10.2365 3 11V13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.50797 20.8514 7.46078 20.9595 9 20.989C9.57703 21 10.2365 21 11 21H13C15.8003 21 17.2004 21 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C21 17.2004 21 15.8003 21 13V11C21 10.2365 21 9.57703 20.989 9M3.01105 9C3.04052 7.46078 3.14859 6.50797 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.50797 3.14859 7.46078 3.04052 9 3.01105C9.57703 3 10.2365 3 11 3H13C15.8003 3 17.2004 3 18.27 3.54497C19.2108 4.02433 19.9757 4.78924 20.455 5.73005C20.8514 6.50798 20.9595 7.46078 20.989 9M3.01105 9L20.989 9" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9 3.01074V20.9886" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
