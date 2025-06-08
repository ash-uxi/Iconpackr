import React from 'react';

/**
 * PiArrowBigDownDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiArrowBigDownDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowBigDownDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-big-down icon',
  ...props
}: PiArrowBigDownDuoSolidProps): JSX.Element {
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
      <path d="M15.999 4.601V4.57C15.999 4.318 15.999 4.072 15.982 3.864C15.9667 3.59654 15.8984 3.3348 15.781 3.094C15.5893 2.71769 15.2833 2.41174 14.907 2.22C14.6661 2.103 14.4044 2.03502 14.137 2.02C13.929 2 13.683 2 13.431 2H10.567C10.315 2 10.069 2 9.86102 2.017C9.59358 2.03233 9.33184 2.10065 9.09102 2.218C8.71472 2.40974 8.40877 2.71569 8.21702 3.092C8.09968 3.33282 8.03136 3.59455 8.01602 3.862C7.99902 4.07 7.99902 4.316 7.99902 4.568V14.527C7.9987 14.7838 8.09717 15.0308 8.27402 15.217C8.45088 15.4032 8.69257 15.5142 8.94902 15.527C10.981 15.627 13.017 15.627 15.049 15.527C15.3055 15.5142 15.5472 15.4032 15.724 15.217C15.9009 15.0308 15.9993 14.7838 15.999 14.527V4.601Z" fill={color || "currentColor"} opacity="0.28" fillRule="evenodd" clipRule="evenodd" /> <path d="M19.8029 14.7911C19.9189 14.6343 19.9865 14.4469 19.9974 14.2522C20.0083 14.0575 19.9621 13.8638 19.8643 13.695C19.7665 13.5262 19.6215 13.3897 19.4471 13.3023C19.2728 13.2149 19.0766 13.1804 18.8829 13.2031C14.3089 13.7331 9.6889 13.7331 5.1139 13.2031C4.92017 13.1804 4.72404 13.2149 4.54967 13.3023C4.3753 13.3897 4.2303 13.5262 4.13253 13.695C4.03475 13.8638 3.98846 14.0575 3.99937 14.2522C4.01027 14.4469 4.07789 14.6343 4.1939 14.7911C6.05566 17.3097 8.2358 19.5765 10.6799 21.5351C11.0539 21.8351 11.519 21.9986 11.9984 21.9986C12.4778 21.9986 12.9429 21.8351 13.3169 21.5351C15.761 19.5765 17.9412 17.3097 19.8029 14.7911Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
