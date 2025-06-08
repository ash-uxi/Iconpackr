import React from 'react';

/**
 * PiBurgerMenuFourStroke icon from the stroke style in general category.
 */
interface PiBurgerMenuFourStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBurgerMenuFourStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'burger-menu-four icon',
  ...props
}: PiBurgerMenuFourStrokeProps): JSX.Element {
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
      <path d="M4 9H20M4 14H20M4 19H20M4 4H20" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
