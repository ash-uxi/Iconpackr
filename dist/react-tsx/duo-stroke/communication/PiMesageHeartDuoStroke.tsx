import React from 'react';

/**
 * PiMesageHeartDuoStroke icon from the duo-stroke style in communication category.
 */
interface PiMesageHeartDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMesageHeartDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'mesage-heart icon',
  ...props
}: PiMesageHeartDuoStrokeProps): JSX.Element {
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
      <path d="M12 13.5625C12.35 13.5625 15.5 11.8612 15.5 9.47931C15.5 8.28839 14.45 7.45249 13.4 7.43772C12.875 7.43033 12.35 7.60786 12 8.11826C11.65 7.60786 11.1159 7.43772 10.6 7.43772C9.55 7.43772 8.5 8.28839 8.5 9.47931C8.5 11.8612 11.65 13.5625 12 13.5625Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V12.2C3 13.8802 3 14.7202 3.32698 15.362C3.6146 15.9265 4.07354 16.3854 4.63803 16.673C5.27976 17 6.11984 17 7.8 17H8V21L13 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.2" fill="none"/>
    </svg>
  );
}
