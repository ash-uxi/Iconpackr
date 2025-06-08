import React from 'react';

/**
 * PiFireDefaultContrast icon from the contrast style in general category.
 */
interface PiFireDefaultContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFireDefaultContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'fire-default icon',
  ...props
}: PiFireDefaultContrastProps): JSX.Element {
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
      <path d="M12 21c-5.333 0-8-4-8-8 0-2.634 1.199-5.075 2.694-6.985A16.4 16.4 0 0 0 8 8c2.003 0 4.663-3.488 4.6-5.875C14.877 2.935 20 7.555 20 13c0 4-2.667 8-8 8m0 0c.863-.001 1.733-.28 2.405-.85 2.893-2.448.621-6.854-.996-7.663-1.606.803-6.111 3.861-4.463 6.847C9.553 20.434 10.769 21 12 21"/>
  <path fill="currentColor" fillRule="evenodd" d="M12.6 2.125C12.663 4.512 10.003 8 8 8c0 0-.712-.905-1.306-1.985C5.2 7.925 4 10.365 4 13c0 4 2.667 8 8 8s8-4 8-8c0-5.445-5.123-10.066-7.4-10.875" clipRule="evenodd" opacity=".28"/>
    </svg>
  );
}
