import React from 'react';

/**
 * PiWineGlassEmptyStroke icon from the stroke style in food category.
 */
interface PiWineGlassEmptyStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWineGlassEmptyStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'wine-glass-empty icon',
  ...props
}: PiWineGlassEmptyStrokeProps): JSX.Element {
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
      <path d="M12 13C15.6 13 18 10.264 18 6.88889C18 5.15448 17.5131 3.42007 16.6983 2H7.30171C6.48685 3.42007 6 5.15448 6 6.88889C6 10.264 8.4 13 12 13ZM12 13V22M16 22L8 22" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
