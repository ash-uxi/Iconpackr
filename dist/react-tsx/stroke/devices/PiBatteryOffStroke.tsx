import React from 'react';

/**
 * PiBatteryOffStroke icon from the stroke style in devices category.
 */
interface PiBatteryOffStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBatteryOffStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'battery-off icon',
  ...props
}: PiBatteryOffStrokeProps): JSX.Element {
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
      <path d="M19.9731 14C20.4381 14 20.6975 14 20.8882 13.9489C21.4059 13.8102 21.8102 13.4059 21.9489 12.8882C22 12.6975 22 12.465 22 12C22 11.535 22 11.3025 21.9489 11.1118C21.8102 10.5941 21.4059 10.1898 20.8882 10.0511C20.6975 10 20.4381 10 19.9731 10M21 3L17.6457 6.35428M3 21L6.02559 17.9744M17.6457 6.35428C17.6077 6.33712 17.5694 6.32052 17.5307 6.30451C16.7956 6.00003 15.8638 6.00003 14 6.00003H8C6.13623 6.00003 5.20435 6.00003 4.46927 6.30451C3.48915 6.71049 2.71046 7.48918 2.30448 8.4693C2 9.20438 2 10.1362 2 12C2 13.8638 2 14.7956 2.30448 15.5307C2.71046 16.5108 3.48915 17.2895 4.46927 17.6955C4.88239 17.8667 5.35767 17.9416 6.02559 17.9744M17.6457 6.35428L6.02559 17.9744M19.9531 9.69261C20 10.2694 20 11.0008 20 12C20 13.8638 20 14.7956 19.6955 15.5307C19.2895 16.5108 18.5108 17.2895 17.5307 17.6955C16.7956 18 15.8638 18 14 18H11.6457" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
