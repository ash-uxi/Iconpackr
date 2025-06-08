import React from 'react';

/**
 * PiSidebarRightDottedStroke icon from the stroke style in general category.
 */
interface PiSidebarRightDottedStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSidebarRightDottedStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'sidebar-right-dotted icon',
  ...props
}: PiSidebarRightDottedStrokeProps): JSX.Element {
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
      <path d="M15 20.989C14.423 21 13.7635 21 13 21H11C8.19974 21 6.79961 21 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3 17.2004 3 15.8003 3 13V11C3 8.19974 3 6.79961 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.79961 3 8.19974 3 11 3H13C13.7635 3 14.423 3 15 3.01105M15 20.989C16.5392 20.9595 17.492 20.8514 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C21 17.2004 21 15.8003 21 13V11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.492 3.14859 16.5392 3.04052 15 3.01105M15 20.989V20M15 3.01105L15 4M15 8V10M15 14V16" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
