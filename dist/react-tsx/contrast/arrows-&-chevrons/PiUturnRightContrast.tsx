import React from 'react';

/**
 * PiUturnRightContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiUturnRightContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUturnRightContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'uturn-right icon',
  ...props
}: PiUturnRightContrastProps): JSX.Element {
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
      <path d="M16.205 8H9a5 5 0 1 0 0 10h3m4.205-10q0-.884-.065-1.764l-.17-2.32a20.8 20.8 0 0 1 3.885 3.679.64.64 0 0 1 0 .809 20.8 20.8 0 0 1-3.886 3.679l.171-2.32A24 24 0 0 0 16.205 8"/>
  <path fill="currentColor" d="M19.855 7.595a20.8 20.8 0 0 0-3.886-3.679l.171 2.32a24 24 0 0 1 0 3.527l-.17 2.32a20.8 20.8 0 0 0 3.885-3.68.64.64 0 0 0 0-.808" opacity=".28"/>
    </svg>
  );
}
