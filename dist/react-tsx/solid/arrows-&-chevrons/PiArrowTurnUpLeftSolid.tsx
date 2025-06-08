import React from 'react';

/**
 * PiArrowTurnUpLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowTurnUpLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowTurnUpLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-turn-up-left icon',
  ...props
}: PiArrowTurnUpLeftSolidProps): JSX.Element {
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
      <path d="M21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20L19 17C19 15.5834 18.9992 14.581 18.9352 13.7974C18.8721 13.0255 18.7527 12.5544 18.564 12.184C18.1805 11.4314 17.5686 10.8195 16.816 10.436C16.4457 10.2473 15.9745 10.1279 15.2026 10.0648C14.419 10.0008 13.4166 10 12 10L9.37309 10C9.40217 10.6683 9.46041 11.3356 9.54783 12C9.60615 12.4433 9.68243 12.8886 9.84424 13.8307C9.91336 14.2332 9.73081 14.6373 9.3831 14.8515C9.03539 15.0656 8.59239 15.0468 8.26406 14.804C6.44203 13.4565 4.80519 11.8821 3.39411 10.1204C3.13266 9.79402 3 9.39747 3 9C3 8.60253 3.13266 8.20598 3.39411 7.87957C4.80519 6.11788 6.44203 4.54346 8.26406 3.19599C8.5924 2.95317 9.03539 2.93439 9.3831 3.14855C9.73081 3.36271 9.91336 3.76678 9.84424 4.16926C9.68243 5.11146 9.60615 5.55667 9.54783 6C9.46042 6.66444 9.40217 7.33174 9.37309 8L12.0437 8C13.4068 7.99999 14.4908 7.99999 15.3654 8.07144C16.261 8.14462 17.0247 8.29768 17.7239 8.65396C18.8529 9.2292 19.7708 10.1471 20.346 11.2761C20.7023 11.9753 20.8554 12.739 20.9286 13.6346C21 14.5091 21 15.5931 21 16.9561L21 20Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
