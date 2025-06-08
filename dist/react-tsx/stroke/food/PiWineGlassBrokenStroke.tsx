import React from 'react';

/**
 * PiWineGlassBrokenStroke icon from the stroke style in food category.
 */
interface PiWineGlassBrokenStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWineGlassBrokenStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'wine-glass-broken icon',
  ...props
}: PiWineGlassBrokenStrokeProps): JSX.Element {
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
      <path d="M12 13C15.6 13 18 10.264 18 6.88889C18 5.15448 17.5131 3.42007 16.6983 2H10.493M12 13C8.4 13 6 10.264 6 6.88889C6 5.15448 6.48685 3.42007 7.30171 2H10.493M12 13V22M12 22H16M12 22L8 22M11.1301 8.00643C10.4993 7.39077 10.1335 6.59986 9.99209 5.73768L11.7062 4.58252C11.491 3.56657 11.0629 2.72834 10.493 2" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
