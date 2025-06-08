import React from 'react';

/**
 * PiMusicQuaverNoteRemoveContrast icon from the contrast style in media category.
 */
interface PiMusicQuaverNoteRemoveContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMusicQuaverNoteRemoveContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'music-quaver-note-remove icon',
  ...props
}: PiMusicQuaverNoteRemoveContrastProps): JSX.Element {
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
      <path d="M4 7h6m4 11.998V3.643a1.64 1.64 0 0 1 2.374-1.468A6.56 6.56 0 0 1 20 8.046 7.07 7.07 0 0 1 18.819 12M14 18.998a3 3 0 1 1-3-3.002 3 3 0 0 1 3 3.002"/>
  <path fill="currentColor" d="M8 18.998a3 3 0 1 1 6.002-.001A3 3 0 0 1 8 18.998" opacity=".28"/>
    </svg>
  );
}
