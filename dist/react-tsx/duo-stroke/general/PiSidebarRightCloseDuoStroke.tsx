import React from 'react';

/**
 * PiSidebarRightCloseDuoStroke icon from the duo-stroke style in general category.
 */
interface PiSidebarRightCloseDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSidebarRightCloseDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'sidebar-right-close icon',
  ...props
}: PiSidebarRightCloseDuoStrokeProps): JSX.Element {
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
      <path d="M15 20.989C14.423 21 13.7635 21 13 21H11C8.19974 21 6.79961 21 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3 17.2004 3 15.8003 3 13V11C3 8.19974 3 6.79961 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.79961 3 8.19974 3 11 3H13C13.7635 3 14.423 3 15 3.01105" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M7.5 9.00067C8.59641 9.79722 9.57846 10.731 10.4207 11.7773C10.5264 11.9087 10.5264 12.0926 10.4207 12.2241C9.57846 13.2704 8.59641 14.2041 7.5 15.0007M21 13.0007V11.0007C21 8.20041 21 6.80028 20.455 5.73072C19.9757 4.78991 19.2108 4.02501 18.27 3.54564C17.492 3.14926 16.5392 3.04119 15 3.01172L15 20.9896C16.5392 20.9602 17.492 20.8521 18.27 20.4557C19.2108 19.9763 19.9757 19.2114 20.455 18.2706C21 17.2011 21 15.8009 21 13.0007Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
