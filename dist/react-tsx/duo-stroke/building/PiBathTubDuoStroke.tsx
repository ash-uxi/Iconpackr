import React from 'react';

/**
 * PiBathTubDuoStroke icon from the duo-stroke style in building category.
 */
interface PiBathTubDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBathTubDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'bath-tub icon',
  ...props
}: PiBathTubDuoStrokeProps): JSX.Element {
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
      <path d="M17 20L18.0001 21.0002" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M3 11V5C3 3.34315 4.34315 2 6 2C7.65685 2 9 3.34315 9 5V6" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M3 13.4142V15.2C3 16.8802 3 17.7202 3.32698 18.362C3.6146 18.9265 4.07354 19.3854 4.63803 19.673C5.27976 20 6.11984 20 7.8 20H16.2C17.8802 20 18.7202 20 19.362 19.673C19.9265 19.3854 20.3854 18.9265 20.673 18.362C21 17.7202 21 16.8802 21 15.2V13.4142C21 13.0419 21 12.8557 21.0257 12.6778C21.0855 12.2647 21.2476 11.8732 21.4974 11.539C21.6051 11.3949 21.7367 11.2633 22 11H2C2.26328 11.2633 2.39492 11.3949 2.50256 11.539C2.75238 11.8732 2.91454 12.2647 2.97427 12.6778C3 12.8557 3 13.0419 3 13.4142Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M7 6H11" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M7.00002 20.0002L6 21" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
