import React from 'react';

/**
 * PiAwardMedalStroke icon from the stroke style in general category.
 */
interface PiAwardMedalStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAwardMedalStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'award-medal icon',
  ...props
}: PiAwardMedalStrokeProps): JSX.Element {
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
      <path d="M16.3653 14.4724L18 22C13.7136 19.3358 10.2864 19.3358 6 22L7.63465 14.4724M16.3653 14.4724C17.9712 13.1898 19 11.215 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 11.215 6.02881 13.1898 7.63465 14.4724M16.3653 14.4724C15.1684 15.4285 13.651 16 12 16C10.349 16 8.83156 15.4285 7.63465 14.4724" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
