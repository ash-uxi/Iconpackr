import React from 'react';

/**
 * PiArrowBigTurnLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowBigTurnLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowBigTurnLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-big-turn-left icon',
  ...props
}: PiArrowBigTurnLeftSolidProps): JSX.Element {
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
      <path d="M9.20354 4.19593C9.36033 4.0796 9.54775 4.01171 9.74267 4.00063C9.93759 3.98956 10.1315 4.03579 10.3005 4.13361C10.4694 4.23143 10.606 4.37658 10.6935 4.55114C10.7809 4.7257 10.8154 4.92204 10.7925 5.11593C10.6805 6.08193 10.5925 7.04993 10.5275 8.01993C13.9185 8.15093 16.7065 8.93693 18.7035 10.6079C20.9415 12.4809 22.0035 15.3079 22.0035 18.9999C22.0035 19.2098 21.9375 19.4144 21.8148 19.5846C21.6921 19.7549 21.5189 19.8822 21.3198 19.9486C21.1207 20.015 20.9057 20.017 20.7054 19.9544C20.505 19.8919 20.3295 19.7678 20.2035 19.5999C17.7485 16.3269 14.6075 16.0299 10.5285 16.0029C10.5932 16.9656 10.6813 17.9265 10.7925 18.8849C10.815 19.0786 10.7803 19.2746 10.6928 19.4488C10.6053 19.623 10.4688 19.7678 10.3001 19.8654C10.1313 19.9631 9.93775 20.0093 9.74311 19.9984C9.54847 19.9874 9.36127 19.9199 9.20454 19.8039C6.68598 17.9425 4.41912 15.7627 2.46054 13.3189C2.16027 12.9449 1.99661 12.4796 1.99661 11.9999C1.99661 11.5203 2.16027 11.055 2.46054 10.6809C4.41913 8.23717 6.68599 6.05737 9.20454 4.19593H9.20354Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
