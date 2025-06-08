import React from 'react';

/**
 * PiCalendarOffDuoStroke icon from the duo-stroke style in time category.
 */
interface PiCalendarOffDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCalendarOffDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'calendar-off icon',
  ...props
}: PiCalendarOffDuoStrokeProps): JSX.Element {
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
      <path d="M2 22L22 2" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M20.9597 10C21 10.7878 21 11.7554 21 13C21 15.7956 21 17.1935 20.5433 18.2961C19.9343 19.7663 18.7663 20.9343 17.2961 21.5433C16.1935 22 14.7956 22 12 22C10.045 22 8.77345 22 7.80852 21.8438M20.9597 10H19.6523M20.9597 10C20.9367 9.55031 20.9006 9.15919 20.8438 8.80854M3.0403 10C3 10.7878 3 11.7554 3 13C3 15.7956 3 17.1935 3.45672 18.2961C3.66909 18.8088 3.94946 19.2848 4.28692 19.7131M3.0403 10C3.09052 9.01824 3.20333 8.31564 3.45672 7.7039C4.06569 6.23373 5.23373 5.06569 6.7039 4.45672C7.08538 4.29871 7.50219 4.19536 8 4.12777M3.0403 10H14M8 2V4.12777M8 4.12777V6M8 4.12777C8.94106 4 10.1716 4 12 4C13.8284 4 15.0589 4 16 4.12777M16 2V4.12777M16 4.12777V6M16 4.12777C16.4978 4.19536 16.9146 4.29871 17.2961 4.45672C17.8088 4.66909 18.2848 4.94946 18.7131 5.28692" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
