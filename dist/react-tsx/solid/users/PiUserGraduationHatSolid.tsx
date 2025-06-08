import React from 'react';

/**
 * PiUserGraduationHatSolid icon from the solid style in users category.
 */
interface PiUserGraduationHatSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserGraduationHatSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-graduation-hat icon',
  ...props
}: PiUserGraduationHatSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M11.7253 1.03848C11.9048 0.987175 12.0952 0.987175 12.2747 1.03848L19.2747 3.03848C19.704 3.16113 20 3.55352 20 4C20 4.44648 19.704 4.83887 19.2747 4.96152L16.819 5.66315C16.937 6.08915 17 6.53761 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 6.53761 7.063 6.08915 7.18098 5.66315L6 5.32573V7C6 7.55228 5.55228 8 5 8C4.44772 8 4 7.55228 4 7V4C4 3.55352 4.29598 3.16113 4.72528 3.03848L11.7253 1.03848ZM14.8959 6.21263L12.2747 6.96152C12.0952 7.01283 11.9048 7.01283 11.7253 6.96152L9.10413 6.21263C9.03626 6.46309 9 6.72693 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 6.72693 14.9637 6.46309 14.8959 6.21263Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
  <path d="M3 19C3 16.2386 5.23858 14 8 14H16C18.7614 14 21 16.2386 21 19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
