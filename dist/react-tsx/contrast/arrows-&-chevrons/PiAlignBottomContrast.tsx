import React from 'react';

/**
 * PiAlignBottomContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiAlignBottomContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignBottomContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'align-bottom icon',
  ...props
}: PiAlignBottomContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M11.596 15.855a20.8 20.8 0 0 1-3.68-3.886c2.718.22 5.45.22 8.167 0a20.8 20.8 0 0 1-3.678 3.886.64.64 0 0 1-.81 0" opacity=".28"/>
  <path d="M5 20h14m-7-7.866V4m0 8.134q-2.044 0-4.083-.165a20.8 20.8 0 0 0 3.678 3.886.64.64 0 0 0 .81 0 20.8 20.8 0 0 0 3.678-3.886 51 51 0 0 1-4.083.165"/>
    </svg>
  );
}
