import React from 'react';

/**
 * PiShoppingCartDuoStroke icon from the duo-stroke style in general category.
 */
interface PiShoppingCartDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiShoppingCartDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'shopping-cart icon',
  ...props
}: PiShoppingCartDuoStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <g opacity="0.28"  fill="none"><path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/><path d="M18 22C18.5523 22 19 21.5523 19 21C19 20.4477 18.5523 20 18 20C17.4477 20 17 20.4477 17 21C17 21.5523 17.4477 22 18 22Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/></g>
  <path d="M2 3H3.22465C4.20873 3 4.70077 3 5.09673 3.18096C5.44567 3.34043 5.74138 3.5969 5.9486 3.91978C6.18373 4.28617 6.25332 4.77324 6.39248 5.74737L6.57143 7M6.57143 7L7.60751 14.2526C7.74667 15.2267 7.81627 15.7139 8.0514 16.0803C8.25862 16.4031 8.55433 16.6596 8.90327 16.8191C9.29923 17 9.79127 17 10.7753 17H14.2717C16.2974 17 17.3102 17 18.1165 16.6224C18.8268 16.2897 19.4236 15.7555 19.8326 15.0864C20.297 14.3267 20.4089 13.3202 20.6325 11.3071L20.7237 10.4868C20.8199 9.62029 20.8682 9.18616 20.7334 8.84171C20.6148 8.5388 20.401 8.28264 20.1242 8.11183C19.8093 7.91753 19.3744 7.88738 18.5044 7.82708L6.57143 7Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
