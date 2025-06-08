import React from 'react';

/**
 * PiUserThreeContrast icon from the contrast style in users category.
 */
interface PiUserThreeContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserThreeContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'user-three icon',
  ...props
}: PiUserThreeContrastProps): JSX.Element {
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
    <path d="M5.983 3.938a1 1 0 0 0-1.369-1.333 5 5 0 0 0 0 8.79 1 1 0 0 0 1.369-1.333A6.7 6.7 0 0 1 5.25 7c0-1.104.264-2.144.733-3.062M19.386 2.605a1 1 0 0 0-1.369 1.333c.468.918.733 1.958.733 3.062a6.7 6.7 0 0 1-.733 3.062 1 1 0 0 0 1.369 1.333 5 5 0 0 0 0-8.79M3.925 15.862A1 1 0 0 0 2.57 14.53 4.75 4.75 0 0 0 0 18.75a3.25 3.25 0 0 0 2.39 3.135 1 1 0 0 0 1.197-1.326 5 5 0 0 1-.337-1.809c0-1.04.243-2.019.675-2.888M21.43 14.529a1 1 0 0 0-1.355 1.333c.432.869.675 1.849.675 2.888 0 .64-.12 1.249-.337 1.809a1 1 0 0 0 1.197 1.326A3.25 3.25 0 0 0 24 18.75a4.75 4.75 0 0 0-2.57-4.221M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M6 18.75A3.75 3.75 0 0 1 9.75 15h4.5A3.75 3.75 0 0 1 18 18.75 2.25 2.25 0 0 1 15.75 21h-7.5A2.25 2.25 0 0 1 6 18.75"/>
  </g>
  <path d="M5.092 10.516a4 4 0 0 1 0-7.033M3.029 15.417A3.75 3.75 0 0 0 1 18.75c0 1.036.7 1.91 1.655 2.17m18.69 0A2.25 2.25 0 0 0 23 18.75a3.75 3.75 0 0 0-2.03-3.333m-2.062-4.9a4 4 0 0 0 0-7.033M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8.25 21h7.5A2.25 2.25 0 0 0 18 18.75 3.75 3.75 0 0 0 14.25 15h-4.5A3.75 3.75 0 0 0 6 18.75 2.25 2.25 0 0 0 8.25 21"/>
    </svg>
  );
}
