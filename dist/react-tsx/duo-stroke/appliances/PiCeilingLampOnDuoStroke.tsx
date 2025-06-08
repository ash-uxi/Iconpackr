import React from 'react';

/**
 * PiCeilingLampOnDuoStroke icon from the duo-stroke style in appliances category.
 */
interface PiCeilingLampOnDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCeilingLampOnDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'ceiling-lamp-on icon',
  ...props
}: PiCeilingLampOnDuoStrokeProps): JSX.Element {
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
      <path  d="M13 20a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0zM13 2a1 1 0 1 0-2 0v2.05a10 10 0 0 1 2 0z" fill="none"/>
  <path d="M15 14H9m-6 0a9 9 0 0 1 18 0z" opacity=".28" fill="none"/>
  <path  d="M16.866 18.5a1 1 0 1 0-1.732 1l.5.866a1 1 0 0 0 1.732-1zM8.126 15a4.002 4.002 0 0 0 7.748 0h-2.141a2 2 0 0 1-3.465 0zM8.866 19.5a1 1 0 1 0-1.732-1l-.5.866a1 1 0 0 0 1.732 1z" fill="none"/>
    </svg>
  );
}
