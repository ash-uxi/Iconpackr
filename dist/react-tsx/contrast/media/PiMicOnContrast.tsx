import React from 'react';

/**
 * PiMicOnContrast icon from the contrast style in media category.
 */
interface PiMicOnContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMicOnContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'mic-on icon',
  ...props
}: PiMicOnContrastProps): JSX.Element {
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
      <path d="M12 20a8 8 0 0 1-8-8m8 8a8 8 0 0 0 8-8m-8 8v2m4-15v5a4 4 0 0 1-8 0V7a4 4 0 1 1 8 0"/>
  <path fill="currentColor" d="M8 7a4 4 0 1 1 8 0v5a4 4 0 0 1-8 0z" opacity=".28"/>
    </svg>
  );
}
