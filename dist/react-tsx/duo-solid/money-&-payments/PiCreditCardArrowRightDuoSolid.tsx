import React from 'react';

/**
 * PiCreditCardArrowRightDuoSolid icon from the duo-solid style in money-&-payments category.
 */
interface PiCreditCardArrowRightDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCreditCardArrowRightDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'credit-card-arrow-right icon',
  ...props
}: PiCreditCardArrowRightDuoSolidProps): JSX.Element {
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
      <path d="M19.59 22.573a12.9 12.9 0 0 0 2.275-2.191.6.6 0 0 0 .135-.38m-2.41-2.572c.846.634 1.61 1.37 2.275 2.191.09.111.135.246.135.38m0 0h-6M2 9h20M6 13h3" /> <path fill={color || "currentColor"} d="M8.357 3h7.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961C23 8.4 23 9.273 23 10.357v3.286c0 1.084 0 1.958-.058 2.666l-.004.046a16 16 0 0 0-1.548-1.325A3 3 0 0 0 16.62 17H16A3 3 0 0 0 13.17 21H8.357c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.961-.487a5 5 0 0 1-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C1 15.6 1 14.727 1 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 3.73 3.544c.592-.302 1.233-.428 1.961-.487C6.4 3 7.273 3 8.357 3" opacity=".28" />
    </svg>
  );
}
