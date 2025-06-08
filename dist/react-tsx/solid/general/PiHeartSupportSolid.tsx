import React from 'react';

/**
 * PiHeartSupportSolid icon from the solid style in general category.
 */
interface PiHeartSupportSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeartSupportSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'heart-support icon',
  ...props
}: PiHeartSupportSolidProps): JSX.Element {
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
      <path d="M11.2372 3.16591C9.48763 1.86399 7.32948 1.71178 5.45831 2.41938C2.99559 3.35068 1 5.77583 1 8.94432C1 12.8877 3.50811 16.1523 5.95649 18.3531C7.19833 19.4694 8.47187 20.3555 9.50746 20.9666C10.0249 21.2718 10.4936 21.5148 10.8789 21.6851C11.0707 21.7699 11.2537 21.842 11.4193 21.8947C11.5596 21.9394 11.7757 22.0001 12 22.0001C12.2987 22.0001 12.6163 21.8888 12.827 21.8074C13.0854 21.7076 13.389 21.5675 13.7213 21.3952C14.3879 21.0494 15.2148 20.55 16.0959 19.9177C17.4497 18.9461 18.9728 17.6307 20.2433 16.0342C20.0639 15.9929 19.8852 15.9472 19.7074 15.897C17.6701 15.3228 15.824 14.2003 14.3815 12.6726L14.029 13.0753C12.4429 14.8881 9.65494 14.983 7.94918 13.2824C6.45078 11.7885 6.30937 9.40893 7.62029 7.74808L11.2372 3.16591Z" fill="currentColor" stroke="none"/>
  <path d="M21.4811 14.2317C22.3856 12.6734 23 10.8918 23 8.94432C23 5.77726 21.002 3.35467 18.5394 2.42419C17.2476 1.9361 15.8188 1.85701 14.4823 2.28278L9.19018 8.9872C8.50829 9.85114 8.58184 11.0889 9.36127 11.866C10.2486 12.7507 11.6988 12.7013 12.5239 11.7583L13.6392 10.4837C13.8368 10.2579 14.1255 10.1327 14.4254 10.1428C14.7254 10.1529 15.0049 10.2972 15.1869 10.5358C16.4484 12.1901 18.2368 13.4046 20.25 13.972C20.6555 14.0864 21.067 14.1728 21.4811 14.2317Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
