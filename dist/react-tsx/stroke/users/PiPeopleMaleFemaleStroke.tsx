import React from 'react';

/**
 * PiPeopleMaleFemaleStroke icon from the stroke style in users category.
 */
interface PiPeopleMaleFemaleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPeopleMaleFemaleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'people-male-female icon',
  ...props
}: PiPeopleMaleFemaleStrokeProps): JSX.Element {
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
      <path d="M15.1813 12.3648C15.4249 10.9966 16.6145 10 18.0043 10C19.3953 10 20.5857 10.9985 20.8278 12.3683L22 19H20L19.5151 20.8358C19.3338 21.5219 18.7131 21.9999 18.0033 21.9998C17.2959 21.9997 16.6767 21.5246 16.4935 20.8412L16 19L14 18.9999L15.1813 12.3648Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M2.27077 12.7509C2.40034 11.196 3.70014 10 5.2604 10H6.73781C8.29882 10 9.59898 11.1971 9.72761 12.7528L10 16.0471L8 15.9999L7.7082 20.4024C7.64862 21.3013 6.90211 22 6.00122 22C5.10069 22 4.35435 21.3019 4.29429 20.4033L4 16L2 16.0001L2.27077 12.7509Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M20 5C20 6.10457 19.1046 7 18 7C16.8954 7 16 6.10457 16 5C16 3.89543 16.8954 3 18 3C19.1046 3 20 3.89543 20 5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M8 5C8 6.10457 7.10457 7 6 7C4.89543 7 4 6.10457 4 5C4 3.89543 4.89543 3 6 3C7.10457 3 8 3.89543 8 5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
