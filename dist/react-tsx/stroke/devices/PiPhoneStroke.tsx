import React from 'react';

/**
 * PiPhoneStroke icon from the stroke style in devices category.
 */
interface PiPhoneStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPhoneStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'phone icon',
  ...props
}: PiPhoneStrokeProps): JSX.Element {
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
      <path d="M12 19H12.01M11.4 2H12.6C14.8402 2 15.9603 2 16.816 2.43597C17.5686 2.81947 18.1805 3.43139 18.564 4.18404C19 5.03968 19 6.15979 19 8.4V15.6C19 17.8402 19 18.9603 18.564 19.816C18.1805 20.5686 17.5686 21.1805 16.816 21.564C15.9603 22 14.8402 22 12.6 22H11.4C9.15979 22 8.03968 22 7.18404 21.564C6.43139 21.1805 5.81947 20.5686 5.43597 19.816C5 18.9603 5 17.8402 5 15.6V8.4C5 6.15979 5 5.03968 5.43597 4.18404C5.81947 3.43139 6.43139 2.81947 7.18404 2.43597C8.03968 2 9.15979 2 11.4 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
