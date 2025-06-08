import React from 'react';

/**
 * PiPaperBagStroke icon from the stroke style in general category.
 */
interface PiPaperBagStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPaperBagStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'paper-bag icon',
  ...props
}: PiPaperBagStrokeProps): JSX.Element {
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
      <path d="M15 8C15 9.65685 13.6569 11 12 11C10.3432 11 9.00005 9.65685 9.00005 8M9.69834 4H14.3018C15.9722 4 16.8075 4 17.4871 4.30253C18.0862 4.56924 18.5983 4.9989 18.9651 5.54254C19.3811 6.1592 19.5262 6.98173 19.8165 8.6268L20.6744 13.4878C21.13 16.0695 21.3578 17.3604 20.9913 18.3677C20.6697 19.2515 20.047 19.9937 19.2325 20.464C18.3042 21 16.9934 21 14.3717 21H9.62835C7.00668 21 5.69585 21 4.76759 20.464C3.95313 19.9937 3.33041 19.2515 3.00883 18.3677C2.64232 17.3604 2.87013 16.0695 3.32574 13.4878L4.18355 8.6268C4.47386 6.98173 4.61901 6.1592 5.03504 5.54254C5.40181 4.9989 5.91393 4.56924 6.51304 4.30253C7.19261 4 8.02785 4 9.69834 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
