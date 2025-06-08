import React from 'react';

/**
 * PiUserAiContrast icon from the contrast style in ai category.
 */
interface PiUserAiContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserAiContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'user-ai icon',
  ...props
}: PiUserAiContrastProps): JSX.Element {
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
      <g fill="currentColor" opacity=".28">
    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 15a4 4 0 0 0-4 4 2 2 0 0 0 2 2h5c0-1.062.552-1.996 1.385-2.529a3 3 0 0 1 .018-2.973V15zM18 14c.637 1.617 1.34 2.345 3 3-1.66.655-2.363 1.384-3 3-.637-1.616-1.34-2.345-3-3 1.66-.655 2.363-1.383 3-3"/>
  </g>
  <path d="M10 21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h3.533M14 21h.01M18 14c-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.384 3 3 .637-1.616 1.34-2.345 3-3-1.66-.655-2.363-1.383-3-3m-2-7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
    </svg>
  );
}
