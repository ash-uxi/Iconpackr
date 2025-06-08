import React from 'react';

/**
 * PiCakeDuoStroke icon from the duo-stroke style in food category.
 */
interface PiCakeDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCakeDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'cake icon',
  ...props
}: PiCakeDuoStrokeProps): JSX.Element {
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
      <path d="M21 14.9996C20.536 15.0131 20.0653 14.7715 19.8426 14.2745C19.409 13.3069 18.0354 13.3069 17.6018 14.2745C17.1683 15.242 15.7947 15.242 15.3611 14.2745C14.9275 13.3069 13.554 13.3069 13.1204 14.2745C12.6868 15.242 11.3132 15.242 10.8796 14.2745C10.446 13.3069 9.07247 13.3069 8.63888 14.2745C8.20528 15.242 6.83173 15.242 6.39813 14.2745C5.96454 13.3069 4.59098 13.3069 4.15739 14.2745C3.93467 14.7714 3.46395 15.0131 3 14.9996M12 5V8M7 5V8.00169M17 5V8.00169" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M7 2V2.01M12 2V2.01M17 2V2.01M21 20H3M21 20H22M21 20V12.8C21 11.1198 21 10.2798 20.673 9.63803C20.3854 9.07354 19.9265 8.6146 19.362 8.32698C18.8313 8.05658 18.1649 8.00979 17 8.00169C16.7563 8 16.4907 8 16.2 8H7.8C7.50929 8 7.24373 8 7 8.00169C5.83507 8.00979 5.16873 8.05658 4.63803 8.32698C4.07354 8.6146 3.6146 9.07354 3.32698 9.63803C3 10.2798 3 11.1198 3 12.8V20M3 20H2" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
