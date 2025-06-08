import React from 'react';

/**
 * PiCreditCardContrast icon from the contrast style in money-&-payments category.
 */
interface PiCreditCardContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCreditCardContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'credit-card icon',
  ...props
}: PiCreditCardContrastProps): JSX.Element {
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
      <path d="M2 9h20M6 13h3m6.6 7H8.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C2 16.96 2 15.84 2 13.6v-3.2c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C5.04 4 6.16 4 8.4 4h7.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C22 7.04 22 8.16 22 10.4v3.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C18.96 20 17.84 20 15.6 20"/>
  <path fill="currentColor" d="M22 10.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 4 17.84 4 15.6 4H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 7.04 2 8.16 2 10.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 20 6.16 20 8.4 20h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 16.96 22 15.84 22 13.6z" opacity=".28"/>
    </svg>
  );
}
