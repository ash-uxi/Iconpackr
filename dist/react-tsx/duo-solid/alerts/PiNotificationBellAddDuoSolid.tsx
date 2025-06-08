import React from 'react';

/**
 * PiNotificationBellAddDuoSolid icon from the duo-solid style in alerts category.
 */
interface PiNotificationBellAddDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNotificationBellAddDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'notification-bell-add icon',
  ...props
}: PiNotificationBellAddDuoSolidProps): JSX.Element {
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
      <path d="M12.0007 2C7.73227 2 4.17637 5.2719 3.82189 9.52563L3.4669 13.7856C3.43575 14.1593 3.31701 14.5205 3.14665 15.0315C2.62569 16.5944 3.67874 18.2394 5.31568 18.4213C6.57802 18.5615 7.84373 18.6619 9.11089 18.7225C11.0363 18.8145 12.9651 18.8144 14.8906 18.7223C16.1575 18.6618 17.423 18.5613 18.6851 18.421C20.3207 18.2392 21.3731 16.5965 20.8545 15.0345C20.6846 14.5228 20.5659 14.1618 20.5348 13.788L20.1796 9.52563C19.8251 5.2719 16.2692 2 12.0007 2Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V10H9C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12L11 12V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H13V8Z" fill={color || "currentColor"} /> <path d="M9.11084 18.7224C8.80468 18.7078 8.4986 18.6908 8.19263 18.6716C8.4437 20.5506 10.0529 22 12.0007 22C13.9485 22 15.5578 20.5505 15.8088 18.6714C15.5028 18.6907 15.1967 18.7077 14.8905 18.7223C14.4092 18.7453 13.9276 18.7626 13.4459 18.7741C13.5439 18.7718 13.6419 18.7692 13.7399 18.7664C13.4886 19.4847 12.8048 20 12.0007 20C11.1966 20 10.5128 19.4847 10.2615 18.7664C9.87784 18.7554 9.49428 18.7407 9.11084 18.7224Z" fill={color || "currentColor"} />
    </svg>
  );
}
