import React from 'react';

/**
 * PiNavigationHorizontalDuoSolid icon from the duo-solid style in navigation category.
 */
interface PiNavigationHorizontalDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNavigationHorizontalDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'navigation-horizontal icon',
  ...props
}: PiNavigationHorizontalDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M10.694 2.71c.613-.947 2-.947 2.613 0a52.2 52.2 0 0 1 7.074 16.785l.127.559c.314 1.38-1.195 2.452-2.395 1.702L13.03 18.58a1.94 1.94 0 0 0-2.06 0l-5.082 3.177c-1.2.75-2.71-.322-2.396-1.702l.127-.559a52.2 52.2 0 0 1 7.075-16.784" opacity=".28" /> <path d="M19.533 20.276a.591.591 0 0 1-.89.632l-5.084-3.177a2.94 2.94 0 0 0-3.12 0l-5.082 3.177a.591.591 0 0 1-.89-.632" />
    </svg>
  );
}
