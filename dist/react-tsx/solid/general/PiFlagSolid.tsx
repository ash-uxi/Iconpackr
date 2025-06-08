import React from 'react';

/**
 * PiFlagSolid icon from the solid style in general category.
 */
interface PiFlagSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFlagSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'flag icon',
  ...props
}: PiFlagSolidProps): JSX.Element {
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
      <path d="M12.5264 3.05229C10.7981 1.9824 8.6912 1.71324 6.74945 2.31425L5.90566 2.57543C5.74598 2.23543 5.40049 2 5 2C4.44772 2 4 2.44772 4 3V21C4 21.5523 4.44772 22 5 22C5.55228 22 6 21.5523 6 21V14.7471C6.17433 14.7001 6.33455 14.6423 6.45765 14.5953C6.56916 14.5527 6.67861 14.5039 6.79124 14.4643C8.30501 13.9532 9.96573 14.1141 11.353 14.9068C13.1781 15.9498 15.3541 16.189 17.3623 15.5674L18.6717 15.1621C19.4615 14.9176 20 14.1872 20 13.3604V4.48517C20 4.21806 19.9359 3.90783 19.7307 3.63126C19.5238 3.35241 19.2477 3.20786 19.0074 3.13947C18.5843 3.01911 18.1496 3.09847 17.8905 3.15942C17.5923 3.22955 17.2987 3.33477 17.0786 3.41853C16.939 3.47166 16.801 3.53251 16.6593 3.58023C15.2702 4.01021 13.7628 3.8177 12.5264 3.05229Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
