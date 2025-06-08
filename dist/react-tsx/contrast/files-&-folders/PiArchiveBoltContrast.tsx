import React from 'react';

/**
 * PiArchiveBoltContrast icon from the contrast style in files-&-folders category.
 */
interface PiArchiveBoltContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveBoltContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-bolt icon',
  ...props
}: PiArchiveBoltContrastProps): JSX.Element {
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
      <path d="m12 11-2.251 3.002a.5.5 0 0 0 .482.793l3.538-.59a.5.5 0 0 1 .482.793L12 18"/>
  <path d="M4 8h16M4 8v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8M4 8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2"/>
  <path fill="currentColor" d="M5 8a1 1 0 0 0-.897-.995L4 7a1 1 0 0 1-.634-.227l-.073-.066A1 1 0 0 1 3 6V5l.005-.099a1 1 0 0 1 .222-.535l.066-.073a1 1 0 0 1 .608-.288L4 4h16a1 1 0 0 1 .634.227l.073.066A1 1 0 0 1 21 5v1a1 1 0 0 1-1 1 1 1 0 0 0-1 1v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" opacity=".28"/>
    </svg>
  );
}
