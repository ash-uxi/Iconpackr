import React from 'react';

/**
 * PiMediaSkipBackward10Stroke icon from the stroke style in media category.
 */
interface PiMediaSkipBackward10StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMediaSkipBackward10Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'media-skip-backward-10 icon',
  ...props
}: PiMediaSkipBackward10StrokeProps): JSX.Element {
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
      <path  d="M10 9h1a1 1 0 0 0-1.238-.971zm-1 6a1 1 0 1 0 2 0zm-1.895-4.785a1 1 0 1 0 1.79.893zM15 10.5v3h2v-3zm-1 3v-3h-2v3zm.5.5a.5.5 0 0 1-.5-.5h-2a2.5 2.5 0 0 0 2.5 2.5zm.5-.5a.5.5 0 0 1-.5.5v2a2.5 2.5 0 0 0 2.5-2.5zm-.5-3.5a.5.5 0 0 1 .5.5h2A2.5 2.5 0 0 0 14.5 8zm0-2a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5zM9 9v6h2V9zm-.105 2.108c.298-.596.768-.996 1.343-1.137L9.762 8.03c-1.229.3-2.137 1.145-2.657 2.186z" fill="none"/>
  <path d="M13 1a10.3 10.3 0 0 0-1.928 1.802.31.31 0 0 0 0 .396A10.3 10.3 0 0 0 13 5" fill="none"/>
  <path d="M6.5 4.686a9.15 9.15 0 1 0 4.687-1.801" fill="none"/>
    </svg>
  );
}
