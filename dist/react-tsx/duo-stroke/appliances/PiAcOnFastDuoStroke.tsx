import React from 'react';

/**
 * PiAcOnFastDuoStroke icon from the duo-stroke style in appliances category.
 */
interface PiAcOnFastDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcOnFastDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-on-fast icon',
  ...props
}: PiAcOnFastDuoStrokeProps): JSX.Element {
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
      <path d="M18 8H16M12 15V20M17 15V15.1459C17 17.2015 18.1614 19.0807 20 20M7 15V15.1459C7 17.2015 5.8386 19.0807 4 20" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M20 4H4C2.89543 4 2 4.89543 2 6V12H22V6C22 4.89543 21.1046 4 20 4Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
