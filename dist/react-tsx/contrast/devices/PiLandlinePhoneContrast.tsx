import React from 'react';

/**
 * PiLandlinePhoneContrast icon from the contrast style in devices category.
 */
interface PiLandlinePhoneContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLandlinePhoneContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'landline-phone icon',
  ...props
}: PiLandlinePhoneContrastProps): JSX.Element {
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
      <path d="M10 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9M13 14h1M13 17h1"/>
  <path d="M13 7h5v4h-5zM17 14h1M17 17h1M3 5.5A2.5 2.5 0 0 1 5.5 3h2A2.5 2.5 0 0 1 10 5.5v13A2.5 2.5 0 0 1 7.5 21h-2A2.5 2.5 0 0 1 3 18.5z"/>
  <path fill="currentColor" d="M7.5 3A2.5 2.5 0 0 1 10 5.5V4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9v-1.5A2.5 2.5 0 0 1 7.5 21h-2A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3z" opacity=".28"/>
    </svg>
  );
}
