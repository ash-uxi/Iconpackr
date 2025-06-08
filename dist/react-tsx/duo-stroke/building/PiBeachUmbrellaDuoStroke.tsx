import React from 'react';

/**
 * PiBeachUmbrellaDuoStroke icon from the duo-stroke style in building category.
 */
interface PiBeachUmbrellaDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBeachUmbrellaDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'beach-umbrella icon',
  ...props
}: PiBeachUmbrellaDuoStrokeProps): JSX.Element {
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
      <path d="M12.1411 12.0739L6.98743 21.0003M9.37282 9.9817C11.7845 5.80453 15.0747 3.18912 16.7217 4.14002C18.3687 5.09091 17.7488 9.24802 15.3371 13.4252C15.1897 13.6805 15.0391 13.9299 14.8857 14.173L13.5944 12.9129C12.7808 12.1189 11.7822 11.5424 10.6878 11.2348L8.95087 10.7465C9.08476 10.4922 9.22545 10.237 9.37282 9.9817Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M16.7217 4.1403C12.6042 1.76307 7.31131 3.2222 4.89962 7.39936C4.75224 7.65463 4.61903 7.91414 4.49976 8.17696L4.89579 8.25559C6.36644 8.54759 7.69658 9.31555 8.68478 10.4432L8.95089 10.7468C9.08478 10.4924 9.22547 10.2372 9.37284 9.98198C11.7845 5.80482 15.0747 3.18941 16.7217 4.1403Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M19.8103 16.0084C22.222 11.8312 20.8392 6.51786 16.7217 4.14062C18.3687 5.09152 17.7488 9.24863 15.3371 13.4258C15.1897 13.6811 15.039 13.9305 14.8857 14.1736L15.2817 14.2523C16.7524 14.5443 18.0825 15.3122 19.0707 16.4398L19.3368 16.7435C19.5048 16.5088 19.6629 16.2637 19.8103 16.0084Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M3 21H21" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
