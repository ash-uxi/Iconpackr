import React from 'react';

/**
 * PiGiftStarStroke icon from the stroke style in general category.
 */
interface PiGiftStarStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGiftStarStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'gift-star icon',
  ...props
}: PiGiftStarStrokeProps): JSX.Element {
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
      <path d="M21 2V3M21 3V4M21 3L22 3M21 3L20 3M20 11.9966C19.8681 12 19.7071 12 19.5 12H12M20 11.9966C20.164 11.9924 20.2831 11.9829 20.3902 11.9616C21.1836 11.8038 21.8038 11.1836 21.9616 10.3902C22 10.197 22 9.96465 22 9.5C22 9.03535 22 8.80302 21.9616 8.60982C21.8038 7.81644 21.1836 7.19624 20.3902 7.03843C20.197 7 19.9647 7 19.5 7H14.5M20 11.9966V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H12M4 11.9966C4.13189 12 4.29291 12 4.5 12H12M4 11.9966C3.83599 11.9924 3.7169 11.9829 3.60982 11.9616C2.81644 11.8038 2.19624 11.1836 2.03843 10.3902C2 10.197 2 9.96465 2 9.5C2 9.03535 2 8.80302 2.03843 8.60982C2.19624 7.81644 2.81644 7.19624 3.60982 7.03843C3.80302 7 4.03534 7 4.5 7H9.5M4 11.9966V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H12M14.5 7C15.8807 7 17 5.88071 17 4.5C17 3.11929 15.8807 2 14.5 2C13.1193 2 12 3.11929 12 4.5M14.5 7H12M12 4.5C12 3.11929 10.8807 2 9.5 2C8.11929 2 7 3.11929 7 4.5C7 5.88071 8.11929 7 9.5 7M12 4.5V7M9.5 7H12M12 21V12M12 12V7" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
