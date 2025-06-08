import React from 'react';

/**
 * PiMinimizeLineArrowStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiMinimizeLineArrowStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMinimizeLineArrowStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'minimize-line-arrow icon',
  ...props
}: PiMinimizeLineArrowStrokeProps): JSX.Element {
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
      <path d="M12.7446 5.59859C12.444 7.36577 12.372 9.15099 12.53 10.9097C12.5435 11.0605 12.6082 11.1938 12.7072 11.2928M18.4014 11.2554C16.6342 11.556 14.849 11.628 13.0903 11.47C12.9395 11.4565 12.8062 11.3918 12.7072 11.2928M12.7072 11.2928L20 4M11.2556 18.4013C11.5562 16.6341 11.6281 14.8489 11.4701 13.0902C11.4566 12.9393 11.3919 12.806 11.293 12.707M5.59874 12.7444C7.36591 12.4438 9.15114 12.3719 10.9098 12.5299C11.0607 12.5434 11.194 12.6081 11.293 12.707M11.293 12.707L4 20" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
