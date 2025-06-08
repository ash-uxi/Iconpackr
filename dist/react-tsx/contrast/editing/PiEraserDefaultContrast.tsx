import React from 'react';

/**
 * PiEraserDefaultContrast icon from the contrast style in editing category.
 */
interface PiEraserDefaultContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEraserDefaultContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'eraser-default icon',
  ...props
}: PiEraserDefaultContrastProps): JSX.Element {
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
      <path d="m14.268 17.292-.907.908c-1.27 1.27-1.905 1.905-2.638 2.143-.644.21-1.338.21-1.982 0-.733-.238-1.368-.873-2.638-2.143l-.303-.303c-1.27-1.27-1.905-1.905-2.143-2.638a3.2 3.2 0 0 1 0-1.982c.238-.732.873-1.368 2.143-2.638l.908-.907m7.56 7.56 3.932-3.931c1.27-1.27 1.905-1.905 2.143-2.638.21-.644.21-1.338 0-1.982-.238-.733-.873-1.368-2.143-2.638l-.303-.303c-1.27-1.27-1.905-1.905-2.638-2.143a3.2 3.2 0 0 0-1.982 0c-.732.238-1.368.873-2.638 2.143L6.708 9.732m7.56 7.56-7.56-7.56"/>
  <path fill="currentColor" d="m17.898 5.8.302.303c1.27 1.27 1.905 1.905 2.143 2.638.21.644.21 1.338 0 1.982-.238.732-.873 1.368-2.143 2.638l-3.224 3.224-7.561-7.56L10.639 5.8c1.27-1.27 1.906-1.905 2.638-2.143a3.2 3.2 0 0 1 1.983 0c.732.238 1.367.873 2.638 2.143" opacity=".28"/>
    </svg>
  );
}
