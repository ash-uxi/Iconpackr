import React from 'react';

/**
 * PiLogOutRightSolid icon from the solid style in general category.
 */
interface PiLogOutRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLogOutRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'log-out-right icon',
  ...props
}: PiLogOutRightSolidProps): JSX.Element {
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
      <path d="M18.7885 8.2C18.471 7.96187 18.0427 7.93404 17.697 8.12909C17.3514 8.32413 17.1538 8.70512 17.1935 9.10001C17.2244 9.40803 17.2587 9.70107 17.2919 9.98443C17.3328 10.3344 17.372 10.6696 17.4011 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H17.4011C17.372 13.3304 17.3328 13.6656 17.2919 14.0155C17.2587 14.2988 17.2244 14.592 17.1935 14.9C17.1538 15.2949 17.3514 15.6759 17.697 15.8709C18.0427 16.066 18.471 16.0381 18.7885 15.8C19.8413 15.0104 20.792 14.0944 21.6195 13.0731C21.8726 12.7608 22 12.3801 22 12C22 11.6199 21.8727 11.2392 21.6196 10.9269C20.792 9.90559 19.8413 8.98959 18.7885 8.2Z" fill="currentColor" stroke="none"/>
  <path d="M9 2C5.13401 2 2 5.13401 2 9V15C2 18.866 5.13401 22 9 22C10.7922 22 12.4291 21.3252 13.6669 20.2173C14.0784 19.849 14.1135 19.2168 13.7451 18.8053C13.3768 18.3938 12.7446 18.3588 12.3331 18.7271C11.4478 19.5194 10.2812 20 9 20C6.23858 20 4 17.7614 4 15V9C4 6.23858 6.23858 4 9 4C10.2812 4 11.4478 4.48059 12.3331 5.27292C12.7446 5.64125 13.3768 5.60623 13.7451 5.1947C14.1135 4.78317 14.0784 4.15098 13.6669 3.78265C12.4291 2.67482 10.7922 2 9 2Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
