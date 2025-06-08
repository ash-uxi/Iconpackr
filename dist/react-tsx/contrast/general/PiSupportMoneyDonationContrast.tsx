import React from 'react';

/**
 * PiSupportMoneyDonationContrast icon from the contrast style in general category.
 */
interface PiSupportMoneyDonationContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSupportMoneyDonationContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'support-money-donation icon',
  ...props
}: PiSupportMoneyDonationContrastProps): JSX.Element {
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
      <g fill="currentColor" opacity=".28">
    <path d="M13.5 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M4 10a2 2 0 0 0-2 2v5a2 2 0 1 0 4 0v-5q0-.062-.004-.124A2 2 0 0 0 4 10"/>
  </g>
  <path d="M15.424 14h4.47c1.364 0 3.468 1.687 1.951 2.997C17.5 21 10.5 21 6 16.913M10 16h4.838c.764 0 1.26-.803.919-1.486A2.74 2.74 0 0 0 13.307 13h-1.122a.8.8 0 0 1-.35-.083 10.47 10.47 0 0 0-5.839-1.04m0 0A2 2 0 0 0 2 12v5a2 2 0 1 0 4 0v-.087m-.004-5.037Q6 11.938 6 12v4.913M19.5 3.627A3.5 3.5 0 0 1 18 9.964M17 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
    </svg>
  );
}
