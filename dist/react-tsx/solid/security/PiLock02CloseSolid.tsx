import React from 'react';

/**
 * PiLock02CloseSolid icon from the solid style in security category.
 */
interface PiLock02CloseSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLock02CloseSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'lock-02-close icon',
  ...props
}: PiLock02CloseSolidProps): JSX.Element {
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
      <path d="M11.5 2C8.46244 2 6 4.46243 6 7.5V9.5359C5.33161 9.92178 4.78771 10.4937 4.43598 11.184C4.18868 11.6694 4.09012 12.1861 4.04419 12.7482C3.99998 13.2894 3.99999 13.9537 4 14.7587V16.2413C3.99999 17.0463 3.99998 17.7106 4.04419 18.2518C4.09012 18.8139 4.18868 19.3306 4.43598 19.816C4.81947 20.5686 5.43139 21.1805 6.18404 21.564C6.66937 21.8113 7.18608 21.9099 7.74818 21.9558C8.28937 22 8.95372 22 9.75868 22H13.2413C14.0463 22 14.7106 22 15.2518 21.9558C15.8139 21.9099 16.3306 21.8113 16.816 21.564C17.5686 21.1805 18.1805 20.5686 18.564 19.816C18.8113 19.3306 18.9099 18.8139 18.9558 18.2518C19 17.7106 19 17.0463 19 16.2413V14.7587C19 13.9537 19 13.2894 18.9558 12.7482C18.9099 12.1861 18.8113 11.6694 18.564 11.184C18.2123 10.4937 17.6684 9.92178 17 9.5359V7.5C17 4.46243 14.5376 2 11.5 2ZM9.63388 8.99996C9.02334 8.99974 8.48192 8.99955 8 9.02721V7.5C8 5.567 9.56701 4 11.5 4C13.433 4 15 5.567 15 7.5V9.02721C14.5181 8.99955 13.9767 8.99974 13.3661 8.99996H9.63388Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
