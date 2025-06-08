import React from 'react';

/**
 * PiCartonStroke icon from the stroke style in food category.
 */
interface PiCartonStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCartonStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'carton icon',
  ...props
}: PiCartonStrokeProps): JSX.Element {
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
      <path d="M9 21H7.032C5.62067 21 4.915 21 4.37594 20.7253C3.90178 20.4837 3.51626 20.0982 3.27466 19.6241C3 19.085 3 18.3793 3 16.968V10.6C3 10.0063 3 9.70952 3.05573 9.42444C3.10518 9.17147 3.18703 8.92593 3.29925 8.69389C3.42571 8.43238 3.60381 8.19492 3.96 7.72L6 5M9 21V9M9 21H16.968C18.3793 21 19.085 21 19.6241 20.7253C20.0982 20.4837 20.4837 20.0982 20.7253 19.6241C21 19.085 21 18.3793 21 16.968V10.6C21 10.0063 21 9.70952 20.9443 9.42444C20.9161 9.28017 20.8773 9.13831 20.8284 9M9 9L6 5M9 9H20.8284M6 5V3.6C6 3.03995 6 2.75992 6.10899 2.54601C6.20487 2.35785 6.35785 2.20487 6.54601 2.10899C6.75992 2 7.03995 2 7.6 2H16.4C16.9601 2 17.2401 2 17.454 2.10899C17.6422 2.20487 17.7951 2.35785 17.891 2.54601C18 2.75992 18 3.03995 18 3.6V5M6 5H18M18 5L20.04 7.72C20.3962 8.19492 20.5743 8.43238 20.7008 8.69389C20.749 8.79359 20.7916 8.89579 20.8284 9" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
