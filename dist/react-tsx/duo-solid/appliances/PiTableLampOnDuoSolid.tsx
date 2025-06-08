import React from 'react';

/**
 * PiTableLampOnDuoSolid icon from the duo-solid style in appliances category.
 */
interface PiTableLampOnDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTableLampOnDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'table-lamp-on icon',
  ...props
}: PiTableLampOnDuoSolidProps): JSX.Element {
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
      <path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V17H10C8.34315 17 7 18.3431 7 20V21C7 21.5523 7.44772 22 8 22H16C16.5523 22 17 21.5523 17 21V20C17 18.3431 15.6569 17 14 17H13V12Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M18.8944 14.5528C18.6474 14.0588 18.0468 13.8586 17.5528 14.1056C17.0588 14.3526 16.8586 14.9532 17.1056 15.4472L18.1056 17.4472C18.3526 17.9412 18.9532 18.1414 19.4472 17.8944C19.9412 17.6474 20.1414 17.0468 19.8944 16.5528L18.8944 14.5528Z" fill={color || "currentColor"} /> <path d="M6.89443 15.4472C7.14142 14.9532 6.9412 14.3526 6.44722 14.1056C5.95324 13.8586 5.35257 14.0588 5.10558 14.5528L4.10558 16.5528C3.85859 17.0468 4.05881 17.6474 4.55279 17.8944C5.04677 18.1414 5.64744 17.9412 5.89443 17.4472L6.89443 15.4472Z" fill={color || "currentColor"} /> <path d="M8.61155 2C7.34216 2 6.21017 2.79893 5.78491 3.99497L3.05779 11.665C2.94893 11.9712 2.99562 12.3111 3.183 12.5766C3.37037 12.8421 3.67506 13 4.00001 13H20C20.325 13 20.6296 12.8421 20.817 12.5766C21.0044 12.3111 21.0511 11.9712 20.9422 11.665L18.2151 3.99497C17.7898 2.79893 16.6579 2 15.3885 2H8.61155Z" fill={color || "currentColor"} />
    </svg>
  );
}
