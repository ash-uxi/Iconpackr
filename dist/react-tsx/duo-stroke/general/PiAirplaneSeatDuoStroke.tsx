import React from 'react';

/**
 * PiAirplaneSeatDuoStroke icon from the duo-stroke style in general category.
 */
interface PiAirplaneSeatDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirplaneSeatDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'airplane-seat icon',
  ...props
}: PiAirplaneSeatDuoStrokeProps): JSX.Element {
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
      <path d="M12 6C12 4.89543 12.8954 4 14 4H15C16.1046 4 17 4.89543 17 6V8C17 9.10457 16.1046 10 15 10H14C12.8954 10 12 9.10457 12 8V6Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M15.2361 17.4918L13.9738 18.1437C11.8385 19.2466 9.21336 18.4768 8.01172 16.3954L4.32959 10.0176" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6.83691 8.63477L10.3671 14.7492C10.9194 15.7058 12.1425 16.0335 13.0991 15.4812L15.5933 14.0412C16.0221 13.7936 16.5676 13.8971 16.8758 14.2846L20.303 18.5918" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M7.83691 4.64648C7.83691 5.19877 7.3892 5.64648 6.83691 5.64648C6.28463 5.64648 5.83691 5.19877 5.83691 4.64648C5.83691 4.0942 6.28463 3.64648 6.83691 3.64648C7.3892 3.64648 7.83691 4.0942 7.83691 4.64648Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
