import React from 'react';

/**
 * PiSidebarMenuDuoStroke icon from the duo-stroke style in general category.
 */
interface PiSidebarMenuDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSidebarMenuDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'sidebar-menu icon',
  ...props
}: PiSidebarMenuDuoStrokeProps): JSX.Element {
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
      <path d="M6 7.99969H6.01M6 11.9997H6.01M6 15.9997H6.01M3 12.9997V10.9997C3 8.19943 3 6.7993 3.54497 5.72974C4.02433 4.78893 4.78924 4.02403 5.73005 3.54466C6.50797 3.14829 7.46078 3.04021 9 3.01074V20.9886C7.46078 20.9592 6.50797 20.8511 5.73005 20.4547C4.78924 19.9754 4.02433 19.2105 3.54497 18.2696C3 17.2001 3 15.8 3 12.9997Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9 3.01105C9.57703 3 10.2365 3 11 3H13C15.8003 3 17.2004 3 18.27 3.54497C19.2108 4.02433 19.9757 4.78924 20.455 5.73005C21 6.79961 21 8.19974 21 11V13C21 15.8003 21 17.2004 20.455 18.27C19.9757 19.2108 19.2108 19.9757 18.27 20.455C17.2004 21 15.8003 21 13 21H11C10.2365 21 9.57703 21 9 20.989" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
