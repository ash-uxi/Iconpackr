import React from 'react';

/**
 * PiVideoCallOutgoingDuoSolid icon from the duo-solid style in devices category.
 */
interface PiVideoCallOutgoingDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVideoCallOutgoingDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'video-call-outgoing icon',
  ...props
}: PiVideoCallOutgoingDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} fillRule="evenodd" d="M13 4a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5zm-1.096 4.044a16 16 0 0 0-2.95.055l-.49.062a1 1 0 0 0 .182 1.99l.102-.01a14 14 0 0 1 1.835-.138l-4.29 4.287-.068.075a1 1 0 0 0 1.406 1.408l.076-.069 4.291-4.288q-.007.706-.084 1.408l-.055.428a1 1 0 0 0 1.96.384l.02-.1c.186-1.303.211-2.623.074-3.93l-.022-.149a1.7 1.7 0 0 0-1.495-1.37z" clipRule="evenodd" /> <path d="M17.714 15.4A2 2 0 0 1 17 13.933v-3.875a2 2 0 0 1 .712-1.458l1-.84C20.016 6.668 22 7.593 22 9.29v5.417c0 1.7-1.985 2.624-3.286 1.531z" opacity=".28" />
    </svg>
  );
}
