import React from 'react';

/**
 * PiArrowRightDownContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiArrowRightDownContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightDownContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right-down icon',
  ...props
}: PiArrowRightDownContrastProps): JSX.Element {
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
      <path d="m14.227 14.227 4.03-4.456c.387 2.588.438 5.209.152 7.797a.95.95 0 0 1-.84.84 30.2 30.2 0 0 1-7.797-.151zm0 0L5.409 5.409"/>
  <path fill="currentColor" d="M18.409 17.568c.286-2.588.235-5.21-.152-7.797l-4.03 4.455-4.456 4.03c2.588.388 5.209.439 7.797.153a.95.95 0 0 0 .84-.84" opacity=".28"/>
    </svg>
  );
}
