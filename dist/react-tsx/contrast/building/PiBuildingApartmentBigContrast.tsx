import React from 'react';

/**
 * PiBuildingApartmentBigContrast icon from the contrast style in building category.
 */
interface PiBuildingApartmentBigContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBuildingApartmentBigContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'building-apartment-big icon',
  ...props
}: PiBuildingApartmentBigContrastProps): JSX.Element {
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
      <path d="M14 6h2m-2 4h2m-2 4h2M8 6h2m-2 4h2m-2 4h2m6 8v-2.4c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C15.24 18 14.96 18 14.4 18H9.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C8 18.76 8 19.04 8 19.6V22m8 0h1.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C19 21.24 19 20.96 19 20.4V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 2 16.92 2 15.8 2H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 3.52 5 4.08 5 5.2v15.2c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C5.76 22 6.04 22 6.6 22H8m8 0H8"/>
  <path fill="currentColor" d="M15.8 2H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 3.52 5 4.08 5 5.2v15.2c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C5.76 22 6.04 22 6.6 22h10.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C19 21.24 19 20.96 19 20.4V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 2 16.92 2 15.8 2" opacity=".28"/>
    </svg>
  );
}
