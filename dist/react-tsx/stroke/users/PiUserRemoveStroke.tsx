import React from 'react';

/**
 * PiUserRemoveStroke icon from the stroke style in users category.
 */
interface PiUserRemoveStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserRemoveStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-remove icon',
  ...props
}: PiUserRemoveStrokeProps): JSX.Element {
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
      <path d="M18 21H6C4.89543 21 4 20.1046 4 19C4 16.7909 5.79086 15 8 15H11M15 15H21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
