import React from 'react';

/**
 * PiTrophyDuoStroke icon from the duo-stroke style in sports category.
 */
interface PiTrophyDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrophyDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'trophy icon',
  ...props
}: PiTrophyDuoStrokeProps): JSX.Element {
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
      <path d="M15.4 3H8.6C8.04219 3 7.76328 3 7.53311 3.05526C6.80181 3.23083 6.23083 3.80181 6.05526 4.53311C6 4.76328 6 5.04219 6 5.6V10C6 13.3137 8.68629 16 12 16C15.3137 16 18 13.3137 18 10V5.6C18 5.04219 18 4.76328 17.9447 4.53311C17.7692 3.80181 17.1982 3.23083 16.4669 3.05526C16.2367 3 15.9578 3 15.4 3Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M17.1996 12.9961C19.8685 12.8913 22 10.6946 22 8V6.6C22 5.71634 21.2837 5 20.4 5H17.9951M6.00489 5H3.6C2.71634 5 2 5.71634 2 6.6V8C2 10.6946 4.13152 12.8913 6.80043 12.9961M8 21H12M12 21H16M12 21V16" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
