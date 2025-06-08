import React from 'react';

/**
 * PiCyberTruckDuoSolid icon from the duo-solid style in automotive category.
 */
interface PiCyberTruckDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCyberTruckDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cyber-truck icon',
  ...props
}: PiCyberTruckDuoSolidProps): JSX.Element {
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
      <path d="M10.2334 6.02761C9.98986 5.96917 9.73327 6.00422 9.51436 6.12584L0.514357 11.1258C0.196892 11.3022 0 11.6368 0 12V15C0 15.5523 0.447715 16 1 16H4C4.55228 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14C6.55228 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H16C16.5523 16 17 15.5523 17 15C17 14.4477 17.4477 14 18 14C18.5523 14 19 14.4477 19 15C19 15.5523 19.4477 16 20 16H22C22.5138 16 22.9439 15.6107 22.995 15.0995L23.495 10.0995C23.5448 9.60205 23.2195 9.14429 22.7334 9.02761L10.2334 6.02761Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M18 12C16.3431 12 15 13.3431 15 15C15 16.6569 16.3431 18 18 18C19.6569 18 21 16.6569 21 15C21 13.3431 19.6569 12 18 12ZM17 15C17 14.4477 17.4477 14 18 14C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" /> <path d="M6 12C4.34315 12 3 13.3431 3 15C3 16.6569 4.34315 18 6 18C7.65685 18 9 16.6569 9 15C9 13.3431 7.65685 12 6 12ZM5 15C5 14.4477 5.44772 14 6 14C6.55228 14 7 14.4477 7 15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
