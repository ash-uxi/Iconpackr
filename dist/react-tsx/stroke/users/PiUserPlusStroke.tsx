import React from 'react';

/**
 * PiUserPlusStroke icon from the stroke style in users category.
 */
interface PiUserPlusStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserPlusStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-plus icon',
  ...props
}: PiUserPlusStrokeProps): JSX.Element {
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
      <path d="M15.3516 21H5C3.89543 21 3 20.1046 3 19C3 16.7909 4.79086 15 7 15H11M18 18V15M18 15V12M18 15H15M18 15H21M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
