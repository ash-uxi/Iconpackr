import React from 'react';

/**
 * PiLaptopSolid icon from the solid style in devices category.
 */
interface PiLaptopSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLaptopSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'laptop icon',
  ...props
}: PiLaptopSolidProps): JSX.Element {
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
      <path d="M7.7587 3C6.95374 2.99999 6.28937 2.99998 5.74817 3.0442C5.18608 3.09012 4.66937 3.18868 4.18404 3.43598C3.43139 3.81947 2.81947 4.43139 2.43597 5.18404C2.18868 5.66937 2.09012 6.18608 2.04419 6.74818C1.99998 7.28937 1.99999 7.95373 2 8.7587L2 15.2676C1.4022 15.6134 1 16.2597 1 17C1 19.2091 2.79086 21 5 21H19C21.2091 21 23 19.2091 23 17C23 16.2597 22.5978 15.6134 22 15.2676V8.75868C22 7.95372 22 7.28937 21.9558 6.74818C21.9099 6.18608 21.8113 5.66937 21.564 5.18404C21.1805 4.43139 20.5686 3.81947 19.816 3.43598C19.3306 3.18868 18.8139 3.09012 18.2518 3.0442C17.7106 2.99998 17.0463 2.99999 16.2413 3H7.7587ZM4 15L20 15V8.8C20 7.94342 19.9992 7.36113 19.9624 6.91104C19.9266 6.47262 19.8617 6.24842 19.782 6.09202C19.5903 5.7157 19.2843 5.40974 18.908 5.21799C18.7516 5.1383 18.5274 5.07337 18.089 5.03755C17.6389 5.00078 17.0566 5 16.2 5H7.8C6.94342 5 6.36113 5.00078 5.91104 5.03755C5.47262 5.07337 5.24842 5.1383 5.09202 5.21799C4.71569 5.40974 4.40973 5.7157 4.21799 6.09202C4.1383 6.24842 4.07337 6.47262 4.03755 6.91104C4.00078 7.36113 4 7.94342 4 8.8V15Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
