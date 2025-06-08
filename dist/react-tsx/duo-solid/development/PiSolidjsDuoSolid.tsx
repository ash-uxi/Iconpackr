import React from 'react';

/**
 * PiSolidjsDuoSolid icon from the duo-solid style in development category.
 */
interface PiSolidjsDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSolidjsDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'solidjs icon',
  ...props
}: PiSolidjsDuoSolidProps): JSX.Element {
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
      <path d="M16.4715 21.9357C20.0294 20.9795 21.8119 18.1253 21.6357 15.5738C21.5475 14.2977 20.9564 13.0796 19.8208 12.3301C18.6846 11.5801 17.1614 11.4015 15.3999 11.8735L3.74121 14.9975C3.38592 15.0927 3.11157 15.3752 3.02689 15.7332C2.94221 16.0911 3.06086 16.4666 3.33583 16.711C6.6369 19.6439 10.9031 23.2719 16.4452 21.9423C16.454 21.9402 16.4627 21.938 16.4715 21.9357Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M21.405 7.51382C18.1039 4.58083 13.8377 0.952839 8.29563 2.28244C8.28685 2.28455 8.2781 2.28678 8.26938 2.28912C4.7115 3.24532 2.92894 6.09946 3.10517 8.65098C3.19331 9.92706 3.78448 11.1452 4.92 11.8947C6.05622 12.6447 7.57947 12.8232 9.3409 12.3513L20.9996 9.2273C21.3549 9.1321 21.6293 8.84955 21.714 8.4916C21.7986 8.13366 21.68 7.75813 21.405 7.51382Z" fill={color || "currentColor"} />
    </svg>
  );
}
