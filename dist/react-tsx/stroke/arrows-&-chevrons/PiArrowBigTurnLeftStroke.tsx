import React from 'react';

/**
 * PiArrowBigTurnLeftStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowBigTurnLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowBigTurnLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-big-turn-left icon',
  ...props
}: PiArrowBigTurnLeftStrokeProps): JSX.Element {
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
      <path d="M3.24113 11.3066C5.14083 8.93491 7.34486 6.81482 9.79883 5C9.64458 6.33024 9.53444 7.6643 9.46842 9C17.0034 9 21.0034 12 21.0034 19C18.0034 15 14.0034 15 9.46842 15C9.53444 16.3357 9.64458 17.6698 9.79883 19C7.34486 17.1852 5.14083 15.0651 3.24113 12.6934C3.07817 12.4899 2.99669 12.245 2.99669 12C2.99669 11.755 3.07817 11.5101 3.24113 11.3066Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
