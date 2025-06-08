import React from 'react';

/**
 * PiHomeAiStroke icon from the stroke style in ai category.
 */
interface PiHomeAiStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHomeAiStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'home-ai icon',
  ...props
}: PiHomeAiStrokeProps): JSX.Element {
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
      <path d="M3 12.7577C3 11.7408 3 11.2324 3.11866 10.7561C3.22385 10.334 3.39721 9.93178 3.63191 9.56543C3.89667 9.15215 4.26632 8.80304 5.00561 8.10483L7.60561 5.64927C9.15211 4.18868 9.92537 3.45839 10.8075 3.18288C11.584 2.94034 12.416 2.94034 13.1925 3.18288C14.0746 3.45839 14.8479 4.18868 16.3944 5.64927L18.9944 8.10483C19.7337 8.80304 20.1033 9.15215 20.3681 9.56543C20.6028 9.93178 20.7761 10.334 20.8813 10.7561C21 11.2324 21 11.7408 21 12.7577V14.599C21 16.8392 21 17.9593 20.564 18.815C20.1805 19.5676 19.5686 20.1795 18.816 20.563C17.9603 20.999 16.8402 20.999 14.6 20.999H9.4C7.15979 20.999 6.03968 20.999 5.18404 20.563C4.43139 20.1795 3.81947 19.5676 3.43597 18.815C3 17.9593 3 16.8392 3 14.599V12.7577Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M8 16.999H8.01M12 9.99902C11.3625 11.6155 10.6609 12.344 9 12.999C10.6609 13.654 11.3625 14.3825 12 15.999C12.6375 14.3825 13.3391 13.654 15 12.999C13.3391 12.344 12.6375 11.6155 12 9.99902Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
