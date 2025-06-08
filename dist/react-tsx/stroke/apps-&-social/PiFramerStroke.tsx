import React from 'react';

/**
 * PiFramerStroke icon from the stroke style in apps-&-social category.
 */
interface PiFramerStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFramerStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'framer icon',
  ...props
}: PiFramerStrokeProps): JSX.Element {
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
      <path d="M12 15V20.8708C12 21.5299 12 21.8594 11.8736 22.0015C11.7642 22.1246 11.6011 22.1859 11.4376 22.1654C11.2489 22.1416 11.0319 21.8936 10.5979 21.3976L5 15M5 15V10.9C5 10.0599 5 9.63988 5.16349 9.31901C5.3073 9.03677 5.53677 8.8073 5.81901 8.66349C6.13988 8.5 6.55992 8.5 7.4 8.5H12M5 15H17.5939C18.2747 15 18.6152 15 18.7579 14.8712C18.8815 14.7597 18.9415 14.5939 18.9179 14.4291C18.8906 14.2388 18.629 14.021 18.1059 13.5853L12 8.5M12 8.5H16.6C17.4401 8.5 17.8601 8.5 18.181 8.33651C18.4632 8.1927 18.6927 7.96323 18.8365 7.68099C19 7.36012 19 6.94008 19 6.1V4.4C19 3.55992 19 3.13988 18.8365 2.81901C18.6927 2.53677 18.4632 2.3073 18.181 2.16349C17.8601 2 17.4401 2 16.6 2H6.43567C5.75704 2 5.41772 2 5.27506 2.12856C5.15151 2.23989 5.0914 2.40536 5.1147 2.57003C5.1416 2.76018 5.40181 2.97796 5.92223 3.4135L12 8.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
