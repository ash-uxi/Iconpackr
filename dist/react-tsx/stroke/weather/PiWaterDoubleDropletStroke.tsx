import React from 'react';

/**
 * PiWaterDoubleDropletStroke icon from the stroke style in weather category.
 */
interface PiWaterDoubleDropletStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWaterDoubleDropletStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'water-double-droplet icon',
  ...props
}: PiWaterDoubleDropletStrokeProps): JSX.Element {
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
      <path d="M16.6199 7.755C15.5009 6.271 13.9869 4.682 11.9999 3C-0.0830712 13.224 5.35993 19.992 10.7749 20.896" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M17.5 11.6699C23.762 17.3739 20.252 21.0029 17.5 21.0029C14.748 21.0029 11.238 17.3729 17.5 11.6699Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
