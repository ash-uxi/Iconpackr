import React from 'react';

/**
 * PiUserLoveHeartStroke icon from the stroke style in users category.
 */
interface PiUserLoveHeartStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserLoveHeartStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-love-heart icon',
  ...props
}: PiUserLoveHeartStrokeProps): JSX.Element {
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
      <path d="M10.4023 21H6C4.89543 21 4 20.1046 4 19C4 16.7909 5.79086 15 8 15H9.21484M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM17 21.3193C16.6 21.3193 13 19.375 13 16.6528C13 15.2918 14.2 14.3196 15.4 14.3196C15.9896 14.3196 16.6 14.514 17 15.0973C17.4 14.514 18 14.3111 18.6 14.3196C19.8 14.3365 21 15.2918 21 16.6528C21 19.375 17.4 21.3193 17 21.3193Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
