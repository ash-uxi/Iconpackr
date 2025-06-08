import React from 'react';

/**
 * PiUserCheckStroke icon from the stroke style in users category.
 */
interface PiUserCheckStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserCheckStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-check icon',
  ...props
}: PiUserCheckStrokeProps): JSX.Element {
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
      <path d="M10.051 15H7C4.79086 15 3 16.7909 3 19C3 20.1046 3.89543 21 5 21H13.6836M14 15.6662L16.3412 18.0049C17.4893 15.9972 19.0934 14.3025 21 13M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
