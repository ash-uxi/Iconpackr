import React from 'react';

/**
 * PiCheckTickCircleBrokenSolid icon from the solid style in general category.
 */
interface PiCheckTickCircleBrokenSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCheckTickCircleBrokenSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'check-tick-circle-broken icon',
  ...props
}: PiCheckTickCircleBrokenSolidProps): JSX.Element {
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
      <path d="M12.0001 1.8501C6.39441 1.8501 1.8501 6.39441 1.8501 12.0001C1.8501 17.6058 6.39441 22.1501 12.0001 22.1501C17.6058 22.1501 22.1501 17.6058 22.1501 12.0001C22.1501 10.1084 21.6326 8.33757 20.7314 6.82146C17.6844 8.91884 15.1483 11.6757 13.3116 14.8877L12.9522 15.5162C12.7912 15.7978 12.5035 15.9838 12.1806 16.0151C11.8577 16.0464 11.5397 15.9192 11.3276 15.6737L7.85284 11.654C7.49167 11.2361 7.5376 10.6046 7.95542 10.2435C8.37324 9.8823 9.00474 9.92822 9.36591 10.346L11.9232 13.3044C13.8653 10.1021 16.4618 7.34339 19.5448 5.21032C17.687 3.14722 14.995 1.8501 12.0001 1.8501Z" fill="currentColor" stroke="none"/>
  <path d="M19.5448 5.21032C19.9909 5.70566 20.3889 6.24516 20.7314 6.82146L21.5986 6.22921C22.0546 5.91774 22.1719 5.29552 21.8604 4.83945C21.5489 4.38337 20.9267 4.26615 20.4706 4.57762L19.6782 5.11879C19.6337 5.14921 19.5892 5.17965 19.5448 5.21032Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
