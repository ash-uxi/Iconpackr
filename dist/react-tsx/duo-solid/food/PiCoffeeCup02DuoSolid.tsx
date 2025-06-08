import React from 'react';

/**
 * PiCoffeeCup02DuoSolid icon from the duo-solid style in food category.
 */
interface PiCoffeeCup02DuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCoffeeCup02DuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'coffee-cup-02 icon',
  ...props
}: PiCoffeeCup02DuoSolidProps): JSX.Element {
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
      <path d="M17.99 11H19a3 3 0 1 1 0 6h-2.487M6 6v-.066c0-.375.188-.726.5-.934s.5-.559.5-.934V4m3 2v-.066c0-.375.188-.726.5-.934s.5-.559.5-.934V4m3 2v-.066c0-.375.188-.726.5-.934s.5-.559.5-.934V4" opacity=".28" /> <path fill={color || "currentColor"} d="M3.568 9c-.252 0-.498 0-.706.017a2 2 0 0 0-.77.201 2 2 0 0 0-.874.874 2 2 0 0 0-.201.77C1 11.07 1 11.316 1 11.568v.785a9 9 0 0 0 18 0v-.785c0-.252 0-.498-.017-.706a2 2 0 0 0-.201-.77 2 2 0 0 0-.874-.874 2 2 0 0 0-.77-.201C16.93 9 16.684 9 16.432 9z" />
    </svg>
  );
}
