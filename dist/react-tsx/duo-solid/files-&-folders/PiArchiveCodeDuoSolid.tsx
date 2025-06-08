import React from 'react';

/**
 * PiArchiveCodeDuoSolid icon from the duo-solid style in files-&-folders category.
 */
interface PiArchiveCodeDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveCodeDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-code icon',
  ...props
}: PiArchiveCodeDuoSolidProps): JSX.Element {
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
      <path d="M10.286 13.214A11.6 11.6 0 0 0 8.06 15.33a.27.27 0 0 0 0 .34c.645.8 1.394 1.512 2.226 2.116m3.428 0a11.6 11.6 0 0 0 2.226-2.116.27.27 0 0 0 0-.34 11.6 11.6 0 0 0-2.226-2.116" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" clipRule="evenodd" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M4 9a1 1 0 0 0-1 1v7a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-7a1 1 0 0 0-1-1z" clipRule="evenodd" opacity=".28" />
    </svg>
  );
}
