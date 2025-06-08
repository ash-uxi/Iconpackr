import React from 'react';

/**
 * PiCrownWinnerKingContrast icon from the contrast style in general category.
 */
interface PiCrownWinnerKingContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCrownWinnerKingContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'crown-winner-king icon',
  ...props
}: PiCrownWinnerKingContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M1.573 6.94c-.142-.616.611-1.034 1.058-.587 2.555 2.556 6.89 1.666 8.233-1.69l.765-1.912a.4.4 0 0 1 .742 0l.765 1.912c1.342 3.356 5.677 4.246 8.232 1.69.447-.447 1.2-.03 1.058.587l-2.484 10.767a22.62 22.62 0 0 0-15.884 0z" opacity=".28"/>
  <path d="M19.23 21.5a20.6 20.6 0 0 0-14.46 0m15.172-3.793L22.426 6.94c.143-.616-.61-1.034-1.058-.587-2.555 2.556-6.89 1.666-8.232-1.69l-.765-1.912a.4.4 0 0 0-.742 0l-.765 1.912C9.522 8.02 5.186 8.91 2.631 6.353c-.447-.447-1.2-.03-1.058.587l2.485 10.767a22.62 22.62 0 0 1 15.884 0"/>
    </svg>
  );
}
