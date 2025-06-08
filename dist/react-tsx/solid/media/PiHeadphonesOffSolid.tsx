import React from 'react';

/**
 * PiHeadphonesOffSolid icon from the solid style in media category.
 */
interface PiHeadphonesOffSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeadphonesOffSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'headphones-off icon',
  ...props
}: PiHeadphonesOffSolidProps): JSX.Element {
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
      <path d="M21.7133 8.48599C21.5017 7.97587 20.9166 7.7339 20.4065 7.94555C19.8963 8.1572 19.6544 8.7423 19.866 9.25243C20.2325 10.1356 20.4547 11.0946 20.5024 12.1011C20.2401 11.9368 19.9507 11.8061 19.6383 11.7165C17.8449 11.2023 15.9743 12.2392 15.46 14.0326L14.4113 17.69C13.897 19.4834 14.934 21.3541 16.7273 21.8683C18.5207 22.3825 20.3914 21.3456 20.9056 19.5522L21.9476 15.9184C22.3138 14.8488 22.5121 13.7025 22.5121 12.5119C22.5121 11.0877 22.2283 9.7273 21.7133 8.48599Z" fill="currentColor" stroke="none"/>
  <path d="M22.7071 2.70711C23.0976 2.31658 23.0976 1.68342 22.7071 1.29289C22.3166 0.902369 21.6834 0.902369 21.2929 1.29289L18.4078 4.17797C16.6343 2.8126 14.4112 1.99977 12 1.99977C6.19431 1.99977 1.48787 6.70621 1.48787 12.5119C1.48787 13.7022 1.68611 14.8483 2.05216 15.9177L3.08078 19.505L1.29289 21.2929C0.902369 21.6834 0.902369 22.3166 1.29289 22.7071C1.68342 23.0976 2.31658 23.0976 2.70711 22.7071L22.7071 2.70711ZM12 3.99977C13.8596 3.99977 15.5787 4.59521 16.9789 5.60688L8.54288 14.0429L8.5399 14.0325C8.02566 12.2391 6.15498 11.2022 4.36162 11.7164C4.04927 11.806 3.75987 11.9367 3.49761 12.101C3.71197 7.59071 7.43662 3.99977 12 3.99977Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
