import React from 'react';

/**
 * PiUserSearchDuoStroke icon from the duo-stroke style in users category.
 */
interface PiUserSearchDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserSearchDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-search icon',
  ...props
}: PiUserSearchDuoStrokeProps): JSX.Element {
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
      <path d="M11.2539 21H6C4.89543 21 4 20.1046 4 19C4 16.7909 5.79086 15 8 15H10.2891" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M21 21L19.1213 19.1213M19.1213 19.1213C19.6642 18.5784 20 17.8284 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20C17.8284 20 18.5784 19.6642 19.1213 19.1213ZM16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
