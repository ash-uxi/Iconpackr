import React from 'react';

/**
 * PiEarthGlobeTimezoneStroke icon from the stroke style in navigation category.
 */
interface PiEarthGlobeTimezoneStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEarthGlobeTimezoneStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'earth-globe-timezone icon',
  ...props
}: PiEarthGlobeTimezoneStrokeProps): JSX.Element {
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
      <path d="M13.9189 3.05172C13.972 3.36063 13.9996 3.6774 13.9996 4.00011C13.9996 6.42896 12.4362 8.52073 10.1876 9.46468C10.3 9.78654 10.3611 10.1325 10.3611 10.4927C10.3611 11.1797 10.1388 11.8147 9.7623 12.3299C10.1998 12.6464 10.4845 13.1612 10.4845 13.7425C10.4845 14.7049 9.70439 15.485 8.74207 15.485C7.77975 15.485 6.99964 14.7049 6.99964 13.7425C6.99964 13.6947 7.00157 13.6473 7.00536 13.6004C5.39574 13.4783 4.12769 12.1336 4.12769 10.4927C4.12769 10.0566 4.21724 9.6415 4.37895 9.26466C4.05555 9.10097 3.74888 8.91263 3.46189 8.70237M13.9189 3.05172C13.3 2.91962 12.6579 2.8501 11.9996 2.8501C8.10884 2.8501 4.78526 5.27853 3.46189 8.70237M13.9189 3.05172C18.0508 3.93367 21.1496 7.60501 21.1496 12.0001C21.1496 12.8611 21.0307 13.6942 20.8084 14.4841M3.46189 8.70237C3.06645 9.72547 2.84961 10.8375 2.84961 12.0001C2.84961 17.0535 6.9462 21.1501 11.9996 21.1501C12.8606 21.1501 13.6937 21.0312 14.4836 20.8089M17.9996 16.5001L18 18.5H19.5M20.8084 14.4841C20.0386 13.8683 19.0621 13.5001 17.9996 13.5001C15.5143 13.5001 13.4996 15.5148 13.4996 18.0001C13.4996 19.0626 13.8678 20.0391 14.4836 20.8089M20.8084 14.4841C21.8393 15.3087 22.4996 16.5773 22.4996 18.0001C22.4996 20.4854 20.4849 22.5001 17.9996 22.5001C16.5768 22.5001 15.3082 21.8398 14.4836 20.8089" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
