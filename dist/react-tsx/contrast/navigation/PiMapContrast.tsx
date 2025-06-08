import React from 'react';

/**
 * PiMapContrast icon from the contrast style in navigation category.
 */
interface PiMapContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMapContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'map icon',
  ...props
}: PiMapContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M4.769 6.116c-.642.32-.963.481-1.198.72a2 2 0 0 0-.462.748C3 7.9 3 8.26 3 8.978v5.897c0 1.667 0 2.5.342 3.008a2 2 0 0 0 1.399.864c.606.08 1.352-.293 2.843-1.039.51-.255.765-.382 1.032-.435.254-.05.514-.05.768 0 .267.053.522.18 1.032.435l3.153 1.577c.525.262.787.393 1.062.445.244.045.494.045.738 0 .275-.052.537-.183 1.062-.445l2.8-1.4c.642-.322.963-.482 1.198-.722a2 2 0 0 0 .462-.747C21 16.1 21 15.74 21 15.022V9.125c0-1.667 0-2.5-.342-3.008a2 2 0 0 0-1.399-.864c-.606-.08-1.352.293-2.843 1.039-.51.255-.765.383-1.032.435a2 2 0 0 1-.768 0c-.267-.052-.522-.18-1.032-.435L10.43 4.716c-.525-.263-.787-.394-1.062-.446a2 2 0 0 0-.738 0c-.275.052-.537.183-1.062.446z" opacity=".28"/>
  <path d="M9 4.236v13m0-13a2 2 0 0 1 .369.034c.275.052.537.183 1.062.446l3.153 1.576c.51.255.765.383 1.032.435q.19.037.384.037M9 4.236a2 2 0 0 0-.369.034c-.275.052-.537.183-1.062.446l-2.8 1.4c-.642.32-.963.481-1.198.72a2 2 0 0 0-.462.748C3 7.901 3 8.26 3 8.978v5.897c0 1.667 0 2.5.342 3.008a2 2 0 0 0 1.399.864c.606.08 1.352-.293 2.843-1.039.51-.255.765-.382 1.032-.435q.19-.037.384-.037m0 0q.194 0 .384.037c.267.053.522.18 1.032.435l3.153 1.577c.525.262.787.393 1.062.445q.183.034.369.034m0-13v13m0-13q.194 0 .384-.037c.267-.052.522-.18 1.032-.435 1.491-.746 2.237-1.118 2.843-1.039a2 2 0 0 1 1.399.864C21 6.624 21 7.457 21 9.125v5.897c0 .718 0 1.077-.11 1.394a2 2 0 0 1-.461.747c-.235.24-.556.4-1.198.721l-2.8 1.4c-.525.263-.787.394-1.062.446a2 2 0 0 1-.369.034"/>
    </svg>
  );
}
