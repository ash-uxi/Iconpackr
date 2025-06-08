import React from 'react';

/**
 * PiArrowLeftUpSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowLeftUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowLeftUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-left-up icon',
  ...props
}: PiArrowLeftUpSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M6.48489 14.8995L9.80982 11.224L17.884 19.2983C18.2746 19.6888 18.9077 19.6888 19.2983 19.2983C19.6888 18.9077 19.6888 18.2746 19.2983 17.884L11.224 9.80982L14.8995 6.48489C15.1861 6.22554 15.2977 5.82419 15.1859 5.45412C15.0741 5.08406 14.759 4.81157 14.3767 4.75433C11.7043 4.35421 8.99677 4.30159 6.3218 4.59719C5.86911 4.64721 5.46192 4.85033 5.15613 5.15613C4.85033 5.46192 4.64721 5.86911 4.59719 6.3218C4.30159 8.99676 4.35421 11.7043 4.75433 14.3767C4.81157 14.759 5.08405 15.0741 5.45412 15.1859C5.82419 15.2977 6.22554 15.1861 6.48489 14.8995Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
