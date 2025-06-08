import React from 'react';

/**
 * PiEncryptedLockStroke icon from the stroke style in security category.
 */
interface PiEncryptedLockStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEncryptedLockStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'encrypted-lock icon',
  ...props
}: PiEncryptedLockStrokeProps): JSX.Element {
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
      <path d="M16 9V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V9M5 13H13M5 17H11M5 21H9M16 13H19M14 17H19M12 21H19" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
