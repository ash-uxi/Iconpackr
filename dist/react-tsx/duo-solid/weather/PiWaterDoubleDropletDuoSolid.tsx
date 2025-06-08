import React from 'react';

/**
 * PiWaterDoubleDropletDuoSolid icon from the duo-solid style in weather category.
 */
interface PiWaterDoubleDropletDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWaterDoubleDropletDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'water-double-droplet icon',
  ...props
}: PiWaterDoubleDropletDuoSolidProps): JSX.Element {
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
      <path d="M11.3539 2.23715C11.5344 2.08434 11.7633 2.00049 11.9999 2.00049C12.2364 2.00049 12.4653 2.08434 12.6459 2.23715C15.4179 4.58215 17.3459 6.80315 18.5689 8.86715C18.0503 8.66936 17.4869 8.61932 16.9416 8.7226C16.3962 8.82588 15.8902 9.07843 15.4799 9.45215C12.0349 12.5892 10.3449 16.0122 11.2239 19.2602C11.4951 20.2763 12.0198 21.207 12.7489 21.9652C12.4999 21.9883 12.2499 22 11.9999 22.0002C8.82187 22.0002 5.08987 20.0642 4.02287 16.4052C2.94087 12.6942 4.76087 7.81515 11.3539 2.23715Z" fill={color || "currentColor"} opacity="0.28" fillRule="evenodd" clipRule="evenodd" /> <path d="M18.1732 10.93C17.9891 10.7625 17.7491 10.6697 17.5002 10.6697C17.2513 10.6697 17.0113 10.7625 16.8272 10.93C13.5912 13.878 12.5692 16.574 13.1552 18.737C13.7312 20.866 15.7522 22.003 17.5002 22.003C19.2482 22.003 21.2692 20.866 21.8452 18.737C22.4312 16.574 21.4092 13.876 18.1732 10.93Z" fill={color || "currentColor"} />
    </svg>
  );
}
