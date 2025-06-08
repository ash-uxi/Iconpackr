import React from 'react';

/**
 * PiMouseButtonRightDuoSolid icon from the duo-solid style in devices category.
 */
interface PiMouseButtonRightDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseButtonRightDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-button-right icon',
  ...props
}: PiMouseButtonRightDuoSolidProps): JSX.Element {
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
      <path d="M13 2.06201C16.9463 2.55413 19.9999 5.92051 20 10.0001L15.2 10.0001C14.6234 10.0001 14.2512 9.99931 13.9678 9.97616C13.6962 9.95397 13.5955 9.91629 13.546 9.8911C13.3578 9.79523 13.2049 9.64225 13.109 9.45408C13.0838 9.40464 13.0461 9.30392 13.0239 9.03226C13.0008 8.74892 13 8.37665 13 7.80009V2.06201Z" fill={color || "currentColor"} /> <path d="M20 12.0001V14.0001C20 18.4184 16.4183 22.0001 12 22.0001C7.58172 22.0001 4 18.4184 4 14.0001V10.0001C4 5.92049 7.05371 2.55409 11 2.06201V7.83863C11 8.36577 11 8.82056 11.0306 9.19513C11.0629 9.59048 11.1342 9.9837 11.327 10.3621C11.6146 10.9266 12.0736 11.3855 12.6381 11.6731C13.0165 11.8659 13.4097 11.9372 13.805 11.9695C14.1796 12.0001 14.6343 12.0001 15.1614 12.0001L20 12.0001Z" fill={color || "currentColor"} opacity="0.28" />
    </svg>
  );
}
