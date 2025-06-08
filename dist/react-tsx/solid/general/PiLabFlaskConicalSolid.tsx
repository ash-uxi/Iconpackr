import React from 'react';

/**
 * PiLabFlaskConicalSolid icon from the solid style in general category.
 */
interface PiLabFlaskConicalSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLabFlaskConicalSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'lab-flask-conical icon',
  ...props
}: PiLabFlaskConicalSolidProps): JSX.Element {
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
      <path d="M7.99997 3C7.99997 2.73478 8.10533 2.48043 8.29287 2.29289C8.4804 2.10536 8.73476 2 8.99997 2H15C15.2652 2 15.5195 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3C16 3.26522 15.8946 3.51957 15.7071 3.70711C15.5195 3.89464 15.2652 4 15 4V8.523C15 8.62653 15.0321 8.72752 15.092 8.812L18.892 14.176L20.522 16.476C22.164 18.796 20.506 22 17.666 22H6.33497C3.49397 22 1.83697 18.795 3.47797 16.477L5.94797 12.991L8.90797 8.811C8.96743 8.72707 8.99955 8.62685 8.99997 8.524V4C8.73476 4 8.4804 3.89464 8.29287 3.70711C8.10533 3.51957 7.99997 3.26522 7.99997 3ZM11 4V8.523C10.9999 9.04068 10.8392 9.54558 10.54 9.968L9.17597 11.893C9.60302 11.8641 10.0319 11.8788 10.456 11.937C11.641 12.1 12.621 12.579 13.441 13.017C13.552 13.075 13.66 13.133 13.764 13.19H13.766C14.809 13.75 15.573 14.161 16.421 14.148L13.46 9.968C13.1607 9.54558 13 9.04068 13 8.523V4H11ZM8.99997 15C8.73476 15 8.4804 15.1054 8.29287 15.2929C8.10533 15.4804 7.99997 15.7348 7.99997 16C7.99997 16.2652 8.10533 16.5196 8.29287 16.7071C8.4804 16.8946 8.73476 17 8.99997 17H9.00997C9.27519 17 9.52954 16.8946 9.71708 16.7071C9.90461 16.5196 10.01 16.2652 10.01 16C10.01 15.7348 9.90461 15.4804 9.71708 15.2929C9.52954 15.1054 9.27519 15 9.00997 15H8.99997Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
