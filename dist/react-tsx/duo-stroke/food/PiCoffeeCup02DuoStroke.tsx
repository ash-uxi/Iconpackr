import React from 'react';

/**
 * PiCoffeeCup02DuoStroke icon from the duo-stroke style in food category.
 */
interface PiCoffeeCup02DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCoffeeCup02DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'coffee-cup-02 icon',
  ...props
}: PiCoffeeCup02DuoStrokeProps): JSX.Element {
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
      <path d="M17.9904 11H19C20.6569 11 22 12.3431 22 14C22 15.6569 20.6569 17 19 17H16.5127M6 6V5.93426C6 5.55883 6.18763 5.20825 6.5 5C6.81237 4.79175 7 4.44117 7 4.06574V4M10 6V5.93426C10 5.55883 10.1876 5.20825 10.5 5C10.8124 4.79175 11 4.44117 11 4.06574V4M14 6V5.93426C14 5.55883 14.1876 5.20825 14.5 5C14.8124 4.79175 15 4.44117 15 4.06574V4" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M18 12.353V11.6C18 11.0399 18 10.7599 17.891 10.546C17.7951 10.3578 17.6422 10.2049 17.454 10.109C17.2401 10 16.9601 10 16.4 10H3.6C3.03995 10 2.75992 10 2.54601 10.109C2.35785 10.2049 2.20487 10.3578 2.10899 10.546C2 10.7599 2 11.0399 2 11.6V12.353C2 16.7712 5.58172 20.353 10 20.353C14.4183 20.353 18 16.7712 18 12.353Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
