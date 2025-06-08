import React from 'react';

/**
 * PiCeilingLampOffContrast icon from the contrast style in appliances category.
 */
interface PiCeilingLampOffContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCeilingLampOffContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'ceiling-lamp-off icon',
  ...props
}: PiCeilingLampOffContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M12 7a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9" opacity=".28"/>
  <path d="M12 7a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9m0 0V4m3 12a3 3 0 1 1-6 0z"/>
    </svg>
  );
}
