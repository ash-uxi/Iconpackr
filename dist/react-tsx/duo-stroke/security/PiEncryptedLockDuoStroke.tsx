import React from 'react';

/**
 * PiEncryptedLockDuoStroke icon from the duo-stroke style in security category.
 */
interface PiEncryptedLockDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEncryptedLockDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'encrypted-lock icon',
  ...props
}: PiEncryptedLockDuoStrokeProps): JSX.Element {
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
      <path d="M16 9V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V9M5 13H13M5 21H9M14 17H19" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5 17H11M16 13H19M12 21H19" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
