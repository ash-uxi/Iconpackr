import React from 'react';

/**
 * PiUturnRightSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiUturnRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUturnRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'uturn-right icon',
  ...props
}: PiUturnRightSolidProps): JSX.Element {
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
      <path d="M9 8.99935C6.79086 8.99935 5 10.7902 5 12.9994C5 15.2085 6.79086 16.9994 9 16.9994H12C12.5523 16.9994 13 17.4471 13 17.9994C13 18.5516 12.5523 18.9994 12 18.9994H9C5.68629 18.9994 3 16.3131 3 12.9994C3 9.68564 5.68629 6.99935 9 6.99935H15.1832C15.1732 6.76913 15.1597 6.53902 15.1427 6.3091L14.9718 3.98951C14.9432 3.60108 15.1427 3.23138 15.4831 3.04208C15.8235 2.85278 16.2428 2.87833 16.5577 3.10756C18.0811 4.21662 19.4502 5.51282 20.6308 6.96374C20.8745 7.26327 21 7.62981 21 7.99935C21 8.36889 20.8745 8.73543 20.6308 9.03497C19.4502 10.4859 18.0811 11.7821 16.5577 12.8911C16.2428 13.1204 15.8235 13.1459 15.4831 12.9566C15.1427 12.7673 14.9432 12.3976 14.9718 12.0092L15.1427 9.68961C15.1597 9.45969 15.1732 9.22958 15.1832 8.99935H9Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
