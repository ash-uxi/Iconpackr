import React from 'react';

/**
 * PiGiftStarSolid icon from the solid style in general category.
 */
interface PiGiftStarSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGiftStarSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'gift-star icon',
  ...props
}: PiGiftStarSolidProps): JSX.Element {
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
      <path d="M11 13H4C3.44772 13 3 13.4477 3 14V16.2413C2.99999 17.0463 2.99998 17.7106 3.04419 18.2518C3.09012 18.8139 3.18868 19.3306 3.43597 19.816C3.81947 20.5686 4.43139 21.1805 5.18404 21.564C5.66937 21.8113 6.18608 21.9099 6.74817 21.9558C7.28936 22 7.95372 22 8.75868 22H11L11 13Z" fill="currentColor" stroke="none"/>
  <path d="M13 22L13 13H20C20.5523 13 21 13.4477 21 14V16.2413C21 17.0463 21 17.7106 20.9558 18.2518C20.9099 18.8139 20.8113 19.3306 20.564 19.816C20.1805 20.5686 19.5686 21.1805 18.816 21.564C18.3306 21.8113 17.8139 21.9099 17.2518 21.9558C16.7106 22 16.0463 22 15.2413 22H13Z" fill="currentColor" stroke="none"/>
  <path d="M22 2C22 1.44772 21.5523 1 21 1C20.4477 1 20 1.44772 20 2C19.4477 2 19 2.44772 19 3C19 3.55228 19.4477 4 20 4C20 4.55228 20.4477 5 21 5C21.5523 5 22 4.55228 22 4C22.5523 4 23 3.55228 23 3C23 2.44772 22.5523 2 22 2Z" fill="currentColor" stroke="none"/>
  <path d="M9.5 1C7.567 1 6 2.567 6 4.5C6 5.0368 6.12085 5.54537 6.33682 6H3.5C2.11929 6 1 7.11929 1 8.5C1 9.88071 2.11929 11 3.5 11H11V6H13V11H20.5C21.8807 11 23 9.88071 23 8.5C23 7.11929 21.8807 6 20.5 6H17.6632C17.8792 5.54537 18 5.0368 18 4.5C18 2.567 16.433 1 14.5 1C13.5207 1 12.6353 1.40223 12 2.05051C11.3647 1.40223 10.4793 1 9.5 1ZM13 6V4.5C13 3.67157 13.6716 3 14.5 3C15.3284 3 16 3.67157 16 4.5C16 5.32843 15.3284 6 14.5 6H13ZM11 6H9.5C8.67157 6 8 5.32843 8 4.5C8 3.67157 8.67157 3 9.5 3C10.3284 3 11 3.67157 11 4.5V6Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
