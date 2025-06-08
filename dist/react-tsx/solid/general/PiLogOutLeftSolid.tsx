import React from 'react';

/**
 * PiLogOutLeftSolid icon from the solid style in general category.
 */
interface PiLogOutLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLogOutLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'log-out-left icon',
  ...props
}: PiLogOutLeftSolidProps): JSX.Element {
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
      <path d="M15 2C13.2078 2 11.5709 2.67482 10.3331 3.78265C9.92156 4.15098 9.88654 4.78317 10.2549 5.1947C10.6232 5.60623 11.2554 5.64125 11.6669 5.27292C12.5522 4.48059 13.7188 4 15 4C17.7614 4 20 6.23858 20 9V15C20 17.7614 17.7614 20 15 20C13.7188 20 12.5522 19.5194 11.6669 18.7271C11.2554 18.3588 10.6232 18.3938 10.2549 18.8053C9.88654 19.2168 9.92156 19.849 10.3331 20.2173C11.5709 21.3252 13.2078 22 15 22C18.866 22 22 18.866 22 15V9C22 5.13401 18.866 2 15 2Z" fill="currentColor" stroke="none"/>
  <path d="M6.30297 8.12909C6.64862 8.32413 6.84621 8.70512 6.80652 9.10001C6.77556 9.40803 6.74128 9.70113 6.70813 9.98449C6.6672 10.3344 6.62799 10.6696 6.59889 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H6.59889C6.62799 13.3304 6.6672 13.6656 6.70814 14.0156C6.74128 14.2989 6.77556 14.592 6.80652 14.9C6.84621 15.2949 6.64862 15.6759 6.30297 15.8709C5.95732 16.066 5.52904 16.0381 5.21153 15.8C4.15874 15.0104 3.208 14.0944 2.38045 13.0731C2.12736 12.7608 2 12.3801 2 12C2 11.6199 2.12735 11.2392 2.38045 10.9269C3.208 9.9056 4.15874 8.9896 5.21153 8.2C5.52904 7.96188 5.95732 7.93405 6.30297 8.12909Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
