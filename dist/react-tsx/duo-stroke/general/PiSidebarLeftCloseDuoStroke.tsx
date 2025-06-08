import React from 'react';

/**
 * PiSidebarLeftCloseDuoStroke icon from the duo-stroke style in general category.
 */
interface PiSidebarLeftCloseDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSidebarLeftCloseDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'sidebar-left-close icon',
  ...props
}: PiSidebarLeftCloseDuoStrokeProps): JSX.Element {
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
      <path d="M16.5 9.00067C15.4036 9.79722 14.4215 10.731 13.5793 11.7773C13.4736 11.9087 13.4736 12.0926 13.5793 12.2241C14.4215 13.2704 15.4036 14.2041 16.5 15.0007M3 13.0007V11.0007C3 8.20041 3 6.80028 3.54497 5.73072C4.02433 4.78991 4.78924 4.02501 5.73005 3.54564C6.50797 3.14926 7.46078 3.04119 9 3.01172L9 20.9896C7.46078 20.9602 6.50797 20.8521 5.73005 20.4557C4.78924 19.9763 4.02433 19.2114 3.54497 18.2706C3 17.2011 3 15.8009 3 13.0007Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9 20.989C9.57703 21 10.2365 21 11 21H13C15.8003 21 17.2004 21 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C21 17.2004 21 15.8003 21 13V11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.2004 3 15.8003 3 13 3H11C10.2365 3 9.57703 3 9 3.01105" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
