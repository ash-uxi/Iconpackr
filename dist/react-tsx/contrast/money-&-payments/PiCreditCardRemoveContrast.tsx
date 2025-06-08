import React from 'react';

/**
 * PiCreditCardRemoveContrast icon from the contrast style in money-&-payments category.
 */
interface PiCreditCardRemoveContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCreditCardRemoveContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'credit-card-remove icon',
  ...props
}: PiCreditCardRemoveContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M2.436 6.184C2 7.04 2 8.16 2 10.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 20 6.16 20 8.4 20h4.77A3 3 0 0 1 16 16h5.962c.038-.629.038-1.403.038-2.4v-3.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 4 17.84 4 15.6 4H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748" opacity=".28"/>
  <path d="M22 9h-.006m0 0H2.006m19.988 0c.006.413.006.876.006 1.4V15m-.006-6c-.018-1.35-.096-2.16-.43-2.816a4 4 0 0 0-1.748-1.748C18.96 4 17.84 4 15.6 4H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748c-.334.655-.412 1.466-.43 2.816m0 0H2m.006 0C2 9.413 2 9.876 2 10.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 20 6.16 20 8.4 20h3.768M9 13H6m10 6h6"/>
    </svg>
  );
}
