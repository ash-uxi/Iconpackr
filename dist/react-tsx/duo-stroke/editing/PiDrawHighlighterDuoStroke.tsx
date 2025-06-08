import React from 'react';

/**
 * PiDrawHighlighterDuoStroke icon from the duo-stroke style in editing category.
 */
interface PiDrawHighlighterDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDrawHighlighterDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'draw-highlighter icon',
  ...props
}: PiDrawHighlighterDuoStrokeProps): JSX.Element {
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
      <path d="M16 17.935V15C16 13.8954 15.1046 13 14 13M8 17.9351V15C8 13.8954 8.89543 13 10 13M14 13H10M14 13V9L13 8L10 10V13" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M2.8501 11.9996C2.8501 6.94621 6.94669 2.84961 12.0001 2.84961C17.0535 2.84961 21.1501 6.94621 21.1501 11.9996C21.1501 17.053 17.0535 21.1496 12.0001 21.1496C6.94669 21.1496 2.8501 17.053 2.8501 11.9996Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
