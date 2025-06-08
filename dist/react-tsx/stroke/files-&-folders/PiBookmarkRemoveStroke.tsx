import React from 'react';

/**
 * PiBookmarkRemoveStroke icon from the stroke style in files-&-folders category.
 */
interface PiBookmarkRemoveStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBookmarkRemoveStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'bookmark-remove icon',
  ...props
}: PiBookmarkRemoveStrokeProps): JSX.Element {
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
      <path d="M9 10H15M19 22V9C19 7.13872 19 6.20808 18.7553 5.45492C18.2607 3.93273 17.0673 2.73931 15.5451 2.24472C14.7919 2 13.8613 2 12 2C10.1387 2 9.20808 2 8.45492 2.24472C6.93273 2.73931 5.73931 3.93273 5.24472 5.45492C5 6.20808 5 7.13872 5 9V22L6.79367 20.4626C8.64154 18.8787 9.56547 18.0867 10.6016 17.7849C11.5149 17.5189 12.4851 17.5189 13.3984 17.7849C14.4345 18.0867 15.3585 18.8787 17.2063 20.4626L19 22Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
