import React from 'react';

/**
 * PiToggleOnStroke icon from the stroke style in general category.
 */
interface PiToggleOnStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiToggleOnStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'toggle-on icon',
  ...props
}: PiToggleOnStrokeProps): JSX.Element {
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
      <path d="M11 12C11 9.79086 12.7909 8 15 8C17.2091 8 19 9.79086 19 12C19 14.2091 17.2091 16 15 16C12.7909 16 11 14.2091 11 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M9 5H15C18.866 5 22 8.13401 22 12C22 15.866 18.866 19 15 19H9C5.13401 19 2 15.866 2 12C2 8.13401 5.13401 5 9 5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
