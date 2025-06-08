import React from 'react';

/**
 * PiPlaystationStroke icon from the stroke style in apps-&-social category.
 */
interface PiPlaystationStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlaystationStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'playstation icon',
  ...props
}: PiPlaystationStrokeProps): JSX.Element {
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
      <path d="M8.04029 13.872L3.8404 15.775C-0.211804 17.3258 3.14503 21.098 7.00493 19.8503L8.04029 19.4288M13.9984 16.1633L16.9493 15.0843C20.6353 13.7812 24.3106 17.6919 20.1692 19.1595L13.9984 21.1264M15 10.8415L16.5768 11.3582C21.1305 12.6043 21.2536 5.18607 16.5768 3.78303L11 2V22" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
