import React from 'react';

/**
 * PiDivertRightContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiDivertRightContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDivertRightContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'divert-right icon',
  ...props
}: PiDivertRightContrastProps): JSX.Element {
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
      <path d="m2 9 6.879 6.879a3 3 0 0 0 4.242 0l4.947-4.947m0 0A24 24 0 0 0 16.1 9.169L15 8.29a20.8 20.8 0 0 1 5.347-.202.625.625 0 0 1 .566.566A20.8 20.8 0 0 1 20.71 14l-.88-1.1a24 24 0 0 0-1.763-1.968"/>
  <path fill="currentColor" d="M20.347 8.087A20.8 20.8 0 0 0 15 8.29l1.1.88a24 24 0 0 1 3.73 3.731l.881 1.1c.298-1.779.366-3.576.202-5.347a.624.624 0 0 0-.566-.566" opacity=".28"/>
    </svg>
  );
}
