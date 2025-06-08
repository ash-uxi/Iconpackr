import React from 'react';

/**
 * PiArchiveArrowRightDuoSolid icon from the duo-solid style in files-&-folders category.
 */
interface PiArchiveArrowRightDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveArrowRightDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-arrow-right icon',
  ...props
}: PiArchiveArrowRightDuoSolidProps): JSX.Element {
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
      <path d="M12.59 18.07c.845-.633 1.61-1.369 2.275-2.19A.6.6 0 0 0 15 15.5m0 0a.6.6 0 0 0-.135-.381 12.9 12.9 0 0 0-2.275-2.19m2.41 2.57H9" /> <path fill={color || "currentColor"} d="M20 10v7a4 4 0 0 1-1.035 2.685l-.137.143A4 4 0 0 1 16 21H8a4 4 0 0 1-4-4v-7z" opacity=".28" /> <path fill={color || "currentColor"} d="M3 3h18a1 1 0 0 1 .634.227l.073.066A1 1 0 0 1 22 4v1a1 1 0 0 1-1 1H3a1 1 0 0 1-.634-.227l-.073-.066A1 1 0 0 1 2 5V4l.005-.099a1 1 0 0 1 .222-.535l.066-.073a1 1 0 0 1 .608-.288z" />
    </svg>
  );
}
