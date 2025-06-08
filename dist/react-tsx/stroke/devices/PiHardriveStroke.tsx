import React from 'react';

/**
 * PiHardriveStroke icon from the stroke style in devices category.
 */
interface PiHardriveStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHardriveStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'hardrive icon',
  ...props
}: PiHardriveStrokeProps): JSX.Element {
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
      <path d="M20.8229 14.3997L19.2821 8.72345C18.823 7.03198 18.5934 6.18625 18.1089 5.55773C17.6812 5.00306 17.1155 4.57038 16.4681 4.30299C15.7346 4 14.8583 4 13.1056 4H11.1841C9.31487 4 8.38025 4 7.65327 4.29688C6.97678 4.57314 6.47229 4.95361 6.02072 5.52811C5.53545 6.14548 5.26143 7.10395 4.7134 9.02089C4.11352 11.1192 3.52411 13.0225 3.21744 14.2845M20.8229 14.3997C20.401 13.124 19.2697 12.1773 17.8919 12.022C17.6966 12 17.4644 12 17 12H7C6.53563 12 6.30344 12 6.10812 12.022C4.77204 12.1725 3.66785 13.0674 3.21744 14.2845M20.8229 14.3997C20.8978 14.6263 20.9504 14.8633 20.978 15.1081C21 15.3034 21 15.5356 21 16C21 16.4644 21 16.6966 20.978 16.8919C20.7952 18.5145 19.5145 19.7952 17.8919 19.978C17.6966 20 17.4644 20 17 20H7C6.53563 20 6.30344 20 6.10812 19.978C4.48545 19.7952 3.20484 18.5145 3.02201 16.8919C3 16.6966 3 16.4644 3 16C3 15.5356 3 15.3034 3.02201 15.1081C3.0543 14.8215 3.12083 14.5456 3.21744 14.2845M17 16H13" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
