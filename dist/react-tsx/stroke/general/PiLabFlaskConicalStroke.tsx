import React from 'react';

/**
 * PiLabFlaskConicalStroke icon from the stroke style in general category.
 */
interface PiLabFlaskConicalStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLabFlaskConicalStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'lab-flask-conical icon',
  ...props
}: PiLabFlaskConicalStrokeProps): JSX.Element {
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
      <path d="M9 16H9.01" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M9.99999 3H14M9.99999 3H8.99999M9.99999 3V8.52257C9.99999 8.83318 9.90356 9.13613 9.72402 9.3896L6.7639 13.5686M14 3H15M14 3V8.52257C14 8.83318 14.0964 9.13613 14.2759 9.3896L18.0754 14.7535M18.0754 14.7535L19.7056 17.055C20.8783 18.7106 19.6944 21 17.6655 21H6.33446C4.30555 21 3.12165 18.7106 4.2944 17.055L6.7639 13.5686M18.0754 14.7535C13.9218 16.6414 12.3875 10.9814 6.7639 13.5686" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
