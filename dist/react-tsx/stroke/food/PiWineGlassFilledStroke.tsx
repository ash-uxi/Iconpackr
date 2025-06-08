import React from 'react';

/**
 * PiWineGlassFilledStroke icon from the stroke style in food category.
 */
interface PiWineGlassFilledStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWineGlassFilledStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'wine-glass-filled icon',
  ...props
}: PiWineGlassFilledStrokeProps): JSX.Element {
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
      <path d="M12 13V22M12 13C15.4027 13 17.7333 10.5557 17.9786 7.43776M12 13C8.99113 13 6.82053 11.0887 6.18882 8.49051M12 22H16M12 22L8 22M17.9786 7.43776C17.9928 7.25695 18 7.07388 18 6.88889C18 5.15448 17.5131 3.42007 16.6983 2H7.30171C6.48685 3.42007 6 5.15448 6 6.88889C6 7.44309 6.06471 7.98005 6.18882 8.49051M17.9786 7.43776C15.9426 8.3103 14.1914 8.96554 12 8C9.87945 7.06567 8.16612 7.64309 6.18882 8.49051" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
