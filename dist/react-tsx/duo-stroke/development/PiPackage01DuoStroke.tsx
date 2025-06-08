import React from 'react';

/**
 * PiPackage01DuoStroke icon from the duo-stroke style in development category.
 */
interface PiPackage01DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPackage01DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'package-01 icon',
  ...props
}: PiPackage01DuoStrokeProps): JSX.Element {
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
      <path d="M12.0002 12V21.5C12.2174 21.5 12.4347 21.4782 12.6484 21.4347C13.1314 21.3363 13.5857 21.0848 14.4943 20.5819L18.506 18.3616C19.4146 17.8587 19.869 17.6073 20.1994 17.2555C20.4917 16.9442 20.7126 16.5775 20.8476 16.1792C21.0002 15.729 21.0002 15.2261 21.0002 14.2203V9.77967C21.0002 8.77388 21.0002 8.27099 20.8476 7.82079C20.797 7.67159 20.7344 7.52683 20.6605 7.38776M12.0002 12L3.33984 7.38776C3.46324 7.15554 3.61812 6.93919 3.80096 6.74452C4.13138 6.39274 4.58569 6.14129 5.49432 5.6384L7.50017 4.52823M12.0002 12L16.3303 9.69388M20.6605 7.38776C20.5371 7.15554 20.3822 6.93919 20.1994 6.74452C19.869 6.39274 19.4146 6.14129 18.506 5.6384L14.4943 3.41807C13.5857 2.91518 13.1314 2.66373 12.6484 2.56531C12.221 2.47823 11.7793 2.47823 11.352 2.56531C10.869 2.66373 10.4146 2.91518 9.50602 3.41807L7.50017 4.52823M20.6605 7.38776L16.3303 9.69388M7.50017 4.52823L16.3303 9.69388" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M5.49415 18.3615L9.50585 20.5819C10.4145 21.0848 10.8688 21.3362 11.3518 21.4346C11.5655 21.4782 11.7827 21.4999 12 21.4999V11.9999L3.33967 7.3877C3.26577 7.52677 3.20316 7.67153 3.15259 7.82073C3 8.27092 3 8.77382 3 9.77961V14.2203C3 15.2261 3 15.7289 3.15259 16.1791C3.2876 16.5775 3.50845 16.9442 3.8008 17.2554C4.13121 17.6072 4.58552 17.8586 5.49415 18.3615Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
