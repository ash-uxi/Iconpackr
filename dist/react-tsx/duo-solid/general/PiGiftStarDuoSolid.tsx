import React from 'react';

/**
 * PiGiftStarDuoSolid icon from the duo-solid style in general category.
 */
interface PiGiftStarDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGiftStarDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'gift-star icon',
  ...props
}: PiGiftStarDuoSolidProps): JSX.Element {
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
      <g opacity="0.28"><path d="M11 14H4C3.44772 14 3 14.4477 3 15V17.2413C2.99999 18.0463 2.99998 18.7106 3.04419 19.2518C3.09012 19.8139 3.18868 20.3306 3.43597 20.816C3.81947 21.5686 4.43139 22.1805 5.18404 22.564C5.66937 22.8113 6.18608 22.9099 6.74817 22.9558C7.28936 23 7.95372 23 8.75868 23H11V14Z" fill={color || "currentColor"} /><path d="M13 23V14H20C20.5523 14 21 14.4477 21 15V17.2413C21 18.0463 21 18.7106 20.9558 19.2518C20.9099 19.8139 20.8113 20.3306 20.564 20.816C20.1805 21.5686 19.5686 22.1805 18.816 22.564C18.3306 22.8113 17.8139 22.9099 17.2518 22.9558C16.7106 23 16.0463 23 15.2413 23H13Z" fill={color || "currentColor"} /></g> <path d="M22 2C22 1.44772 21.5523 1 21 1C20.4477 1 20 1.44772 20 2C19.4477 2 19 2.44772 19 3C19 3.55228 19.4477 4 20 4C20 4.55228 20.4477 5 21 5C21.5523 5 22 4.55228 22 4C22.5523 4 23 3.55228 23 3C23 2.44772 22.5523 2 22 2Z" fill={color || "currentColor"} /> <path d="M9.5 2C7.567 2 6 3.567 6 5.5C6 6.0368 6.12085 6.54537 6.33682 7H3.5C2.11929 7 1 8.11929 1 9.5C1 10.8807 2.11929 12 3.5 12H11V7H13V12H20.5C21.8807 12 23 10.8807 23 9.5C23 8.11929 21.8807 7 20.5 7H17.6632C17.8792 6.54537 18 6.0368 18 5.5C18 3.567 16.433 2 14.5 2C13.5207 2 12.6353 2.40223 12 3.05051C11.3647 2.40223 10.4793 2 9.5 2ZM13 7V5.5C13 4.67157 13.6716 4 14.5 4C15.3284 4 16 4.67157 16 5.5C16 6.32843 15.3284 7 14.5 7H13ZM11 7H9.5C8.67157 7 8 6.32843 8 5.5C8 4.67157 8.67157 4 9.5 4C10.3284 4 11 4.67157 11 5.5V7Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
