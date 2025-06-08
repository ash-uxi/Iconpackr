import React from 'react';

/**
 * PiNotificationBellOnSolid icon from the solid style in alerts category.
 */
interface PiNotificationBellOnSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNotificationBellOnSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'notification-bell-on icon',
  ...props
}: PiNotificationBellOnSolidProps): JSX.Element {
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
      <path d="M3.82189 9.52563C4.17637 5.2719 7.73227 2 12.0007 2C16.2692 2 19.8251 5.2719 20.1796 9.52563L20.5348 13.788C20.5659 14.1618 20.6846 14.5228 20.8545 15.0345C21.3731 16.5965 20.3207 18.2392 18.6851 18.421C17.728 18.5274 16.769 18.6109 15.8088 18.6714C15.5578 20.5506 13.9486 22 12.0007 22C10.053 22 8.44376 20.5507 8.19269 18.6716C7.23231 18.6111 6.27303 18.5276 5.31568 18.4213C3.67874 18.2394 2.62569 16.5944 3.14665 15.0315C3.31701 14.5205 3.43575 14.1593 3.4669 13.7856L3.82189 9.52563ZM10.2615 18.7665C10.5129 19.4848 11.1966 20 12.0007 20C12.8049 20 13.4887 19.4848 13.74 18.7664C13.642 18.7692 13.544 18.7718 13.446 18.7742C12.3846 18.7995 11.3228 18.797 10.2615 18.7665Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
