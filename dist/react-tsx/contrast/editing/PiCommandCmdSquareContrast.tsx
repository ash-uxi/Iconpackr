import React from 'react';

/**
 * PiCommandCmdSquareContrast icon from the contrast style in editing category.
 */
interface PiCommandCmdSquareContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCommandCmdSquareContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'command-cmd-square icon',
  ...props
}: PiCommandCmdSquareContrastProps): JSX.Element {
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
      <path d="M10.333 13.667H8.667a1.667 1.667 0 1 0 1.666 1.666zm0 0h3.334m-3.334 0v-3.334m3.334 3.334h1.666a1.667 1.667 0 1 1-1.666 1.666zm0 0v-3.334m0 0V8.667a1.667 1.667 0 1 1 1.666 1.666zm0 0h-3.334m0 0H8.667a1.667 1.667 0 1 1 1.666-1.666zM11 21h2c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C21 17.2 21 15.8 21 13v-2c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C17.2 3 15.8 3 13 3h-2c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 3.545 5.73C3 6.8 3 8.2 3 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C6.8 21 8.2 21 11 21"/>
  <path fill="currentColor" d="M3 11c0-2.8 0-4.2.545-5.27A5 5 0 0 1 5.73 3.545C6.8 3 8.2 3 11 3h2c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C21 6.8 21 8.2 21 11v2c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C17.2 21 15.8 21 13 21h-2c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C3 17.2 3 15.8 3 13z" opacity=".28"/>
    </svg>
  );
}
