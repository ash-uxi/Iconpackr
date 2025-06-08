import React from 'react';

/**
 * PiBluetoothConnectedDuoStroke icon from the duo-stroke style in media category.
 */
interface PiBluetoothConnectedDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBluetoothConnectedDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'bluetooth-connected icon',
  ...props
}: PiBluetoothConnectedDuoStrokeProps): JSX.Element {
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
      <path d="M20 12H18M6 12H4" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 7.93535C6.6144 9.01491 9.12494 10.1566 11.4844 11.5396M11.4844 11.5396C11.7412 11.6901 11.9962 11.8435 12.2494 12M11.4844 11.5396L11.1789 2.51657C11.1789 2.13306 11.5972 1.88362 11.9527 2.05513C14.0084 3.04691 15.8737 4.14821 17.5302 5.74653C18.1566 6.35096 18.1566 7.33092 17.5302 7.93535C15.8871 9.52074 14.1187 10.8446 12.2494 12M11.4844 11.5396V12.4604M12.2494 12C14.1187 13.1554 15.8871 14.4793 17.5302 16.0647C18.1566 16.6691 18.1566 17.6491 17.5302 18.2535C15.8752 19.8504 14.0024 20.956 11.9527 21.9449C11.5972 22.1164 11.1789 21.8669 11.1789 21.4834L11.4844 12.4604M12.2494 12C11.9962 12.1565 11.7412 12.3099 11.4844 12.4604M11.4844 12.4604C9.12494 13.8434 6.61441 14.9851 4 16.0647" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
