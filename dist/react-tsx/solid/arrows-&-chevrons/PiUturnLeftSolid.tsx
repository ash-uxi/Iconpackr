import React from 'react';

/**
 * PiUturnLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiUturnLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUturnLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'uturn-left icon',
  ...props
}: PiUturnLeftSolidProps): JSX.Element {
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
      <path d="M15 8.99935C17.2091 8.99935 19 10.7902 19 12.9994C19 15.2085 17.2091 16.9994 15 16.9994H12C11.4477 16.9994 11 17.4471 11 17.9994C11 18.5516 11.4477 18.9994 12 18.9994H15C18.3137 18.9994 21 16.3131 21 12.9994C21 9.68564 18.3137 6.99935 15 6.99935H8.81682C8.82684 6.76913 8.84032 6.53902 8.85726 6.3091L9.02819 3.98951C9.05681 3.60108 8.85731 3.23138 8.51693 3.04208C8.17654 2.85278 7.75722 2.87833 7.44234 3.10756C5.91889 4.21662 4.5498 5.51282 3.36919 6.96374C3.12546 7.26327 3 7.62981 3 7.99935C3 8.36889 3.12546 8.73543 3.36919 9.03497C4.54979 10.4859 5.91889 11.7821 7.44234 12.8911C7.75722 13.1204 8.17654 13.1459 8.51693 12.9566C8.85731 12.7673 9.05681 12.3976 9.02819 12.0092L8.85726 9.68961C8.84032 9.45969 8.82684 9.22958 8.81682 8.99935H15Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
