import React from 'react';

/**
 * PiUserArrowRightSolid icon from the solid style in users category.
 */
interface PiUserArrowRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserArrowRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-arrow-right icon',
  ...props
}: PiUserArrowRightSolidProps): JSX.Element {
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
      <path d="M16.3548 14.0124C16.2376 14.0042 16.1193 14 16 14H8C5.23858 14 3 16.2386 3 19C3 20.6569 4.34315 22 6 22H16.3592C16.2443 21.6752 16.188 21.3368 16.1883 21H15C13.3431 21 12 19.6569 12 18C12 16.3431 13.3431 15 15 15H16.1883C16.188 14.6675 16.2429 14.3334 16.3548 14.0124Z" fill="currentColor" stroke="none"/>
  <path d="M22.6195 16.9269C22.8726 17.2392 23 17.6199 23 18C23 18.3801 22.8726 18.7608 22.6196 19.0731C21.792 20.0944 20.8413 21.0104 19.7885 21.8C19.3466 22.1314 18.7198 22.0418 18.3885 21.6C18.0571 21.1582 18.1466 20.5314 18.5885 20.2C19.0809 19.8307 19.5478 19.4297 19.9864 19H15C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17H19.9864C19.5478 16.5703 19.0809 16.1693 18.5885 15.8C18.1466 15.4686 18.0571 14.8418 18.3885 14.4C18.7198 13.9582 19.3466 13.8686 19.7885 14.2C20.8413 14.9896 21.792 15.9056 22.6195 16.9269Z" fill="currentColor" stroke="none"/>
  <path d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
