import React from 'react';

/**
 * PiTicketTokenOneContrast icon from the contrast style in general category.
 */
interface PiTicketTokenOneContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTicketTokenOneContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'ticket-token-one icon',
  ...props
}: PiTicketTokenOneContrastProps): JSX.Element {
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
      <path d="M12 15V9.378c-.676.165-1.193.63-1.5 1.244M12 15h-2m2 0h2M2.6 9a.6.6 0 0 1-.6-.6V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v.4a.6.6 0 0 1-.6.6 2.4 2.4 0 0 0-2.4 2.4v1.2a2.4 2.4 0 0 0 2.4 2.4.6.6 0 0 1 .6.6v.4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-.4a.6.6 0 0 1 .6-.6A2.4 2.4 0 0 0 5 12.6v-1.2A2.4 2.4 0 0 0 2.6 9"/>
  <path fill="currentColor" d="M18 4H6a4 4 0 0 0-4 4v.4a.6.6 0 0 0 .6.6A2.4 2.4 0 0 1 5 11.4v1.2A2.4 2.4 0 0 1 2.6 15a.6.6 0 0 0-.6.6v.4a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-.4a.6.6 0 0 0-.6-.6 2.4 2.4 0 0 1-2.4-2.4v-1.2A2.4 2.4 0 0 1 21.4 9a.6.6 0 0 0 .6-.6V8a4 4 0 0 0-4-4" opacity=".28"/>
    </svg>
  );
}
