import React from 'react';

/**
 * PiFireplaceDuoSolid icon from the duo-solid style in general category.
 */
interface PiFireplaceDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFireplaceDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'fireplace icon',
  ...props
}: PiFireplaceDuoSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M3 21h2m0 0V7m0 14h14m0 0h2m-2 0V7" opacity=".28" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v1A2.5 2.5 0 0 0 4.5 8h15A2.5 2.5 0 0 0 22 5.5v-1A2.5 2.5 0 0 0 19.5 2zm8.634 8.145a1 1 0 0 0-1.496.646c-.132.617-.31 1.225-.522 1.655l-.001.002a9 9 0 0 1-.442-.568 1 1 0 0 0-1.629-.01C8.481 12.651 8 13.68 8 14.84c0 .958.322 1.947 1.006 2.708.7.78 1.726 1.259 2.994 1.259s2.293-.48 2.994-1.259c.684-.761 1.006-1.75 1.006-2.708 0-1.149-.47-2.166-1.025-2.944-.555-.776-1.25-1.394-1.84-1.751" clipRule="evenodd" />
    </svg>
  );
}
