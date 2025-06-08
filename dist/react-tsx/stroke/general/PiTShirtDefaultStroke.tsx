import React from 'react';

/**
 * PiTShirtDefaultStroke icon from the stroke style in general category.
 */
interface PiTShirtDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTShirtDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 't-shirt-default icon',
  ...props
}: PiTShirtDefaultStrokeProps): JSX.Element {
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
      <path d="M1.5 6L8 3L9.09 3.272C11.0006 3.74958 12.9994 3.74958 14.91 3.272L16 3L22.5 6L21 11L18 10V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H7C6.73478 21 6.48043 20.8946 6.29289 20.7071C6.10536 20.5196 6 20.2652 6 20V10L3 11L1.5 6Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
