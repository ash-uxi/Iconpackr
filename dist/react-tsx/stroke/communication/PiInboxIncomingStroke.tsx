import React from 'react';

/**
 * PiInboxIncomingStroke icon from the stroke style in communication category.
 */
interface PiInboxIncomingStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiInboxIncomingStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'inbox-incoming icon',
  ...props
}: PiInboxIncomingStrokeProps): JSX.Element {
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
      <path d="M21.9282 11H16.9231C16.4133 11 16 11.4133 16 11.9231C16 13.6224 14.6224 15 12.9231 15H11.0769C9.37759 15 8 13.6224 8 11.9231C8 11.4133 7.58672 11 7.07692 11H2.07181M21.9282 11C21.9114 10.9392 21.8918 10.8792 21.8694 10.8202C21.8139 10.6744 21.7354 10.5369 21.5784 10.2622L19.8427 7.22471C19.1716 6.05024 18.836 5.463 18.3645 5.03578C17.9473 4.65778 17.455 4.37211 16.9199 4.19743M21.9282 11C21.9482 11.0726 21.9641 11.1464 21.9758 11.2209C22 11.3751 22 11.5333 22 11.8498V12C22 14.8003 22 16.2004 21.455 17.27C20.9757 18.2108 20.2108 18.9757 19.27 19.455C18.2004 20 16.8003 20 14 20H10C7.19974 20 5.79961 20 4.73005 19.455C3.78924 18.9757 3.02433 18.2108 2.54497 17.27C2 16.2004 2 14.8003 2 12V11.8498C2 11.5333 2 11.3751 2.02421 11.2209C2.03591 11.1464 2.05181 11.0726 2.07181 11M2.07181 11C2.08856 10.9392 2.10817 10.8792 2.13061 10.8202C2.18609 10.6743 2.2646 10.5369 2.42162 10.2622L4.15731 7.22471C4.82844 6.05024 5.164 5.463 5.63552 5.03578C6.0527 4.65778 6.54497 4.37211 7.08014 4.19743M10 7.12564C10.4935 7.78364 11.066 8.37785 11.7043 8.89507C11.7906 8.96502 11.8953 9 12 9M14 7.12564C13.5065 7.78364 12.934 8.37785 12.2957 8.89507C12.2094 8.96502 12.1047 9 12 9M12 9V4" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
