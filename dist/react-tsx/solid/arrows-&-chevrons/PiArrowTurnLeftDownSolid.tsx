import React from 'react';

/**
 * PiArrowTurnLeftDownSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowTurnLeftDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowTurnLeftDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-turn-left-down icon',
  ...props
}: PiArrowTurnLeftDownSolidProps): JSX.Element {
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
      <path d="M20 3C20.5523 3 21 3.44772 21 4C21 4.55229 20.5523 5 20 5L17 5C15.5834 5 14.581 5.00078 13.7974 5.0648C13.0255 5.12787 12.5544 5.24729 12.184 5.43597C11.4314 5.81947 10.8195 6.43139 10.436 7.18404C10.2473 7.55435 10.1279 8.02552 10.0648 8.79744C10.0008 9.58104 10 10.5834 10 12L10 14.6269C10.6683 14.5978 11.3356 14.5396 12 14.4522C12.4433 14.3938 12.8886 14.3176 13.8307 14.1558C14.2332 14.0866 14.6373 14.2692 14.8515 14.6169C15.0656 14.9646 15.0468 15.4076 14.804 15.7359C13.4565 17.558 11.8821 19.1948 10.1204 20.6059C9.79402 20.8673 9.39747 21 9 21C8.60253 21 8.20598 20.8673 7.87957 20.6059C6.11788 19.1948 4.54347 17.558 3.19599 15.7359C2.95317 15.4076 2.93439 14.9646 3.14855 14.6169C3.36271 14.2692 3.76678 14.0866 4.16926 14.1558C5.11146 14.3176 5.55667 14.3938 6 14.4522C6.66444 14.5396 7.33174 14.5978 8 14.6269L8 11.9563C7.99999 10.5932 7.99999 9.50917 8.07144 8.63458C8.14462 7.73898 8.29768 6.9753 8.65396 6.27606C9.2292 5.14709 10.1471 4.2292 11.2761 3.65396C11.9753 3.29768 12.739 3.14462 13.6346 3.07144C14.5091 2.99999 15.5931 2.99999 16.9561 3L20 3Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
