import React from 'react';

/**
 * PiPriorityTrivialDuoStroke icon from the duo-stroke style in development category.
 */
interface PiPriorityTrivialDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPriorityTrivialDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'priority-trivial icon',
  ...props
}: PiPriorityTrivialDuoStrokeProps): JSX.Element {
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
      <path d="M11.3066 19.8403C9.25473 18.7664 7.39117 17.5437 5.75069 16.1952C5.26196 15.7934 5 15.2228 5 14.6311L5 4C6.81482 5.6034 8.93491 7.04349 11.3066 8.28473C11.5101 8.39121 11.755 8.44444 12 8.44444C12.245 8.44444 12.4899 8.39121 12.6934 8.28473C15.0651 7.04349 17.1852 5.6034 19 4L19 14.6311C19 15.2228 18.738 15.7935 18.2493 16.1952C16.6088 17.5437 14.7453 18.7664 12.6934 19.8403C12.4899 19.9468 12.245 20 12 20C11.755 20 11.5101 19.9468 11.3066 19.8403Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M5.19971 15.5C5.32615 15.7607 5.51125 15.9982 5.75084 16.1952C7.39132 17.5437 9.25488 18.7664 11.3068 19.8403C11.5102 19.9468 11.7552 20 12.0001 20C12.2451 20 12.4901 19.9468 12.6935 19.8403C14.7454 18.7664 16.609 17.5437 18.2495 16.1952C18.4891 15.9982 18.6741 15.7607 18.8006 15.5" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
