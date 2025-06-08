import React from 'react';

/**
 * PiDrawHighlighterAngleContrast icon from the contrast style in editing category.
 */
interface PiDrawHighlighterAngleContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDrawHighlighterAngleContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'draw-highlighter-angle icon',
  ...props
}: PiDrawHighlighterAngleContrastProps): JSX.Element {
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
      <path d="m17.164 15.907-1.45 1.45a1 1 0 0 1-1.221.15m2.671-1.6a2.5 2.5 0 0 0 3.147-.318l2.474-2.475m-5.621 2.793a2.5 2.5 0 0 1-.389-.318l-6.364-6.364a2.5 2.5 0 0 1-.318-.389m0 0-1.45 1.45a1 1 0 0 0-.15 1.222m1.6-2.672a2.5 2.5 0 0 1 .318-3.146l2.475-2.475m-4.393 8.293q.062.103.15.192l5.657 5.657q.09.09.193.15m-6-6-4.907 4.908A2 2 0 0 0 3 17.829V19a1 1 0 0 0 1 1h7.586a1 1 0 0 0 .707-.293l2.2-2.2"/>
  <path fill="currentColor" d="m8.643 11.7 5.657 5.657q.087.087.193.15l-2.2 2.2a1 1 0 0 1-.707.293H4a1 1 0 0 1-1-1v-1.17a2 2 0 0 1 .586-1.414l4.907-4.907q.062.103.15.192z" opacity=".28"/>
    </svg>
  );
}
