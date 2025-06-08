import React from 'react';

/**
 * PiPeopleFemaleFemaleContrast icon from the contrast style in users category.
 */
interface PiPeopleFemaleFemaleContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPeopleFemaleFemaleContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'people-female-female icon',
  ...props
}: PiPeopleFemaleFemaleContrastProps): JSX.Element {
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
      <g fill="currentColor" opacity=".28">
    <path d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M3.181 12.365a2.867 2.867 0 0 1 5.647.003l.964 5.458A1 1 0 0 1 8.808 19H8.77a1 1 0 0 0-.967.745l-.288 1.09a1.563 1.563 0 0 1-3.021.006l-.295-1.1A1 1 0 0 0 3.233 19h-.04a1 1 0 0 1-.984-1.175zM20 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M15.181 12.365a2.867 2.867 0 0 1 5.647.003l.965 5.458A1 1 0 0 1 20.808 19h-.038a1 1 0 0 0-.967.745l-.288 1.09a1.563 1.563 0 0 1-3.021.006l-.295-1.1a1 1 0 0 0-.966-.741h-.04a1 1 0 0 1-.984-1.175z"/>
  </g>
  <path d="M15.181 12.365a2.867 2.867 0 0 1 5.647.003l.965 5.458A1 1 0 0 1 20.808 19h-.038a1 1 0 0 0-.967.745l-.288 1.09a1.563 1.563 0 0 1-3.021.006l-.295-1.1a1 1 0 0 0-.966-.741h-.04a1 1 0 0 1-.984-1.175zM20 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M3.181 12.365a2.867 2.867 0 0 1 5.647.003l.964 5.458A1 1 0 0 1 8.808 19H8.77a1 1 0 0 0-.967.745l-.288 1.09a1.563 1.563 0 0 1-3.021.006l-.295-1.1A1 1 0 0 0 3.233 19h-.04a1 1 0 0 1-.984-1.175zM8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
    </svg>
  );
}
