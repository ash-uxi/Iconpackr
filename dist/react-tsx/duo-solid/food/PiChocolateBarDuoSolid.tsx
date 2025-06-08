import React from 'react';

/**
 * PiChocolateBarDuoSolid icon from the duo-solid style in food category.
 */
interface PiChocolateBarDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChocolateBarDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chocolate-bar icon',
  ...props
}: PiChocolateBarDuoSolidProps): JSX.Element {
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
      <path d="M4 8.00019H11V1H11.2112C11.642 1 12.0243 1.2759 12.1602 1.68474C12.3385 2.2216 12.6275 2.70775 13 3.11632V8.00019H20V10.0002H13V14.0002H20V16.0002H13V23H11V16.0002H4V14.0002H11V10.0002H4V8.00019Z" fill={color || "currentColor"} /> <path d="M7.5 1C5.567 1 4 2.567 4 4.5V19.5C4 21.433 5.567 23 7.5 23H16.5C18.433 23 20 21.433 20 19.5V8C20 7.44772 19.5523 7 19 7C17.9918 7 17.1563 6.25302 17.0197 5.28262C16.9495 4.78373 16.519 4.415 16.0153 4.42213C15.996 4.42241 15.9766 4.42254 15.9572 4.42254C14.1906 4.42254 12.689 3.27661 12.1602 1.68474C12.0243 1.2759 11.642 1 11.2112 1H7.5Z" fill={color || "currentColor"} opacity="0.28" />
    </svg>
  );
}
