import React from 'react';

/**
 * PiThermometerUpContrast icon from the contrast style in general category.
 */
interface PiThermometerUpContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThermometerUpContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'thermometer-up icon',
  ...props
}: PiThermometerUpContrastProps): JSX.Element {
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
      <path d="M15 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 0v-7"/>
  <path fill="currentColor" d="M18 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0z" opacity=".28"/>
  <path d="M18 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0zM7.572 8.41a12.9 12.9 0 0 0-2.19-2.274A.6.6 0 0 0 5 6m-2.572 2.41C3.064 7.565 3.8 6.8 4.621 6.136A.6.6 0 0 1 5 6m0 0v6.429"/>
    </svg>
  );
}
