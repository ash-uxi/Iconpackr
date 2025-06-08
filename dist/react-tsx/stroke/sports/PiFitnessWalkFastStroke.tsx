import React from 'react';

/**
 * PiFitnessWalkFastStroke icon from the stroke style in sports category.
 */
interface PiFitnessWalkFastStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFitnessWalkFastStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fitness-walk-fast icon',
  ...props
}: PiFitnessWalkFastStrokeProps): JSX.Element {
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
      <path d="M13.5 17.5L13.4062 17.9692C13.1461 19.2695 12.3801 20.4132 11.2768 21.1488L10 22" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M14 3C14 2.44772 14.4477 2 15 2C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4C14.4477 4 14 3.55228 14 3Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M21 22L18.5938 17.1876C18.2047 16.4094 17.6192 15.7461 16.8952 15.2635L15.8906 14.5937C15.3342 14.2228 15 13.5983 15 12.9296V7L12.4202 8.93488C11.5015 9.62389 10.848 10.6081 10.5694 11.7222L10 14" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M22 10H20.4142C19.5087 10 18.6403 9.64029 18 9" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M9 4H5M7 9H2M6 15H3M7 20H2" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
