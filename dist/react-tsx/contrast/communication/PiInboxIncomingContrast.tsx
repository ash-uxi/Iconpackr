import React from 'react';

/**
 * PiInboxIncomingContrast icon from the contrast style in communication category.
 */
interface PiInboxIncomingContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiInboxIncomingContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'inbox-incoming icon',
  ...props
}: PiInboxIncomingContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M10 20h4c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C22 16.2 22 14.8 22 12v-.15c0-.317 0-.475-.024-.63a2 2 0 0 0-.048-.22h-5.005a.923.923 0 0 0-.923.923c0 1.7-1.378 3.077-3.077 3.077h-1.846A3.077 3.077 0 0 1 8 11.923.923.923 0 0 0 7.077 11H2.072a2 2 0 0 0-.048.22C2 11.376 2 11.534 2 11.85V12c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 20 7.2 20 10 20" opacity=".28"/>
  <path d="M21.928 11h-5.005a.923.923 0 0 0-.923.923c0 1.7-1.378 3.077-3.077 3.077h-1.846A3.077 3.077 0 0 1 8 11.923.923.923 0 0 0 7.077 11H2.072m19.856 0a2 2 0 0 0-.059-.18c-.055-.146-.134-.283-.29-.558l-1.736-3.037c-.671-1.175-1.007-1.762-1.479-2.19a4 4 0 0 0-1.444-.838M21.928 11a2 2 0 0 1 .048.22c.024.155.024.313.024.63V12c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 20 16.8 20 14 20h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12v-.15c0-.317 0-.475.024-.63a2 2 0 0 1 .048-.22m0 0a2 2 0 0 1 .059-.18c.055-.146.134-.283.29-.558l1.736-3.037c.671-1.175 1.007-1.762 1.479-2.19a4 4 0 0 1 1.444-.838M10 7.126a10 10 0 0 0 1.704 1.77c.087.069.191.104.296.104m2-1.874a10 10 0 0 1-1.704 1.77A.47.47 0 0 1 12 9m0 0V4"/>
    </svg>
  );
}
