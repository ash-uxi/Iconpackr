import React from 'react';

/**
 * PiNoteOutlineAiContrast icon from the contrast style in ai category.
 */
interface PiNoteOutlineAiContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNoteOutlineAiContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'note-outline-ai icon',
  ...props
}: PiNoteOutlineAiContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311c-.27.53-.317 1.197-.325 2.362h17.996c-.008-1.165-.055-1.831-.325-2.362a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4" opacity=".28"/>
  <path d="M21 11.53V8.8q0-.434-.002-.8m-9.003 12H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 17.72 3 16.88 3 15.2V8.8q0-.434.002-.8m17.996 0c-.008-1.165-.055-1.831-.325-2.362a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311c-.27.53-.317 1.197-.325 2.362m17.996 0H3.002M15 22zM19 15c-.637 1.616-1.34 2.345-3 3 1.66.655 2.363 1.384 3 3 .637-1.616 1.34-2.345 3-3-1.66-.655-2.363-1.384-3-3"/>
    </svg>
  );
}
