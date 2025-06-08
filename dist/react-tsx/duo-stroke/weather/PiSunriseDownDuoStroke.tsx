import React from 'react';

/**
 * PiSunriseDownDuoStroke icon from the duo-stroke style in weather category.
 */
interface PiSunriseDownDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSunriseDownDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'sunrise-down icon',
  ...props
}: PiSunriseDownDuoStrokeProps): JSX.Element {
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
      <path d="M16.0039 20.9957C16.6296 20.1607 17.0003 19.1237 17.0003 18C17.0003 15.2386 14.7617 13 12.0003 13C9.23884 13 7.00027 15.2386 7.00027 18C7.00027 19.1205 7.36887 20.155 7.99144 20.9887M16.0039 20.9957L7.99144 20.9887M16.0039 20.9957L21.0003 21M7.99144 20.9887L3 20.9844M9.55691 6.71035C10.1598 7.51421 10.8592 8.24015 11.639 8.87203C11.7445 8.95749 11.8724 9.00022 12.0003 9.00022M14.4436 6.71035C13.8407 7.51421 13.1413 8.24015 12.3615 8.87203C12.2561 8.95748 12.1282 9.00022 12.0003 9.00022M12.0003 9.00022V3" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M2 17H3M21 17H22M4.47234 10.4221L5.22544 11.08M19.5343 10.4219L18.7812 11.0798" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
