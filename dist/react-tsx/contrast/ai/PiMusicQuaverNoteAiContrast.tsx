import React from 'react';

/**
 * PiMusicQuaverNoteAiContrast icon from the contrast style in ai category.
 */
interface PiMusicQuaverNoteAiContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMusicQuaverNoteAiContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'music-quaver-note-ai icon',
  ...props
}: PiMusicQuaverNoteAiContrastProps): JSX.Element {
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
      <g fill="currentColor" opacity=".28">
    <path d="M8 18.998a3 3 0 1 1 6.002-.001A3 3 0 0 1 8 18.998M7 4c.638 1.616 1.34 2.345 3 3-1.66.655-2.362 1.384-3 3-.638-1.616-1.34-2.345-3-3 1.66-.655 2.362-1.384 3-3"/>
  </g>
  <path d="M14 18.998V3.643a1.64 1.64 0 0 1 2.374-1.468A6.56 6.56 0 0 1 20 8.046 7.07 7.07 0 0 1 18.819 12M14 18.998a3 3 0 1 1-3-3.002 3 3 0 0 1 3 3.002M3 11h.01M7 4c-.638 1.616-1.34 2.345-3 3 1.66.655 2.362 1.384 3 3 .638-1.616 1.34-2.345 3-3-1.66-.655-2.362-1.384-3-3"/>
    </svg>
  );
}
