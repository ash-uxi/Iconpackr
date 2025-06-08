import React from 'react';

/**
 * PiSunriseUpContrast icon from the contrast style in weather category.
 */
interface PiSunriseUpContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSunriseUpContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'sunrise-up icon',
  ...props
}: PiSunriseUpContrastProps): JSX.Element {
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
      <path fill="currentColor" fillRule="evenodd" d="M16.004 20.996a5 5 0 1 0-8.012-.007z" clipRule="evenodd" opacity=".28"/>
  <path d="M16.004 20.996a5 5 0 1 0-8.012-.007m8.012.007-8.013-.007m8.013.007L21 21m-13.009-.011L3 20.984M9.557 5.29a12.2 12.2 0 0 1 2.082-2.162A.57.57 0 0 1 12 3m2.443 2.29a12.2 12.2 0 0 0-2.082-2.162A.57.57 0 0 0 12 3m0 0v6M2 17h1m18 0h1M4.472 10.422l.753.658m14.31-.658-.754.658"/>
    </svg>
  );
}
