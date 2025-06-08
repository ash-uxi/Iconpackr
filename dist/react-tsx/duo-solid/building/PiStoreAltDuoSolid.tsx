import React from 'react';

/**
 * PiStoreAltDuoSolid icon from the duo-solid style in building category.
 */
interface PiStoreAltDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStoreAltDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'store-alt icon',
  ...props
}: PiStoreAltDuoSolidProps): JSX.Element {
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
      <path d="M20 21v-7.257m-16 0V18.6c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163h5.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.58v-5.184" opacity=".28" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M7.34 2c-1.758 0-3.198.29-4.216 1.24-1.011.944-1.391 2.342-1.555 3.983l-.315 3.145-.004.054c-.105 2.35 1.536 4.68 4.239 4.68a4.25 4.25 0 0 0 3.256-1.514A4.25 4.25 0 0 0 12 15.103a4.25 4.25 0 0 0 3.256-1.515 4.25 4.25 0 0 0 3.255 1.515c2.69 0 4.359-2.324 4.236-4.688l-.003-.047-.315-3.145c-.164-1.641-.544-3.039-1.555-3.983C19.857 2.29 18.417 2 16.659 2z" clipRule="evenodd" />
    </svg>
  );
}
