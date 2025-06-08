import React from 'react';

/**
 * PiBicepsContrast icon from the contrast style in sports category.
 */
interface PiBicepsContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBicepsContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'biceps icon',
  ...props
}: PiBicepsContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M6.6 2h3.598a2 2 0 0 1 1.664.89l.903 1.355a1 1 0 0 1-.125 1.262L11.03 7.115a2 2 0 0 1-2.614.186l-.075-.057a12.24 12.24 0 0 1 2.133 7.822l-.182 2.544.975-2.44.365-.73a5.93 5.93 0 0 1 7.506-2.853l1.604.642A2 2 0 0 1 22 14.086v4.716a2 2 0 0 1-1.717 1.98l-1.569.224c-4.614.66-9.3.643-13.908-.049l-1.01-.151a2 2 0 0 1-1.7-2.083l.153-2.92a30 30 0 0 1 1.809-8.795l1.604-4.354A1 1 0 0 1 6.6 2" opacity=".28"/>
  <path d="m8.342 7.244.075.057a2 2 0 0 0 2.614-.186l1.609-1.608a1 1 0 0 0 .125-1.262l-.903-1.354A2 2 0 0 0 10.198 2H6.6a1 1 0 0 0-.938.654L4.058 7.008a30 30 0 0 0-1.809 8.794l-.153 2.921a2 2 0 0 0 1.7 2.083l1.01.151c4.609.692 9.294.708 13.908.049l1.569-.224A2 2 0 0 0 22 18.802v-4.716a2 2 0 0 0-1.257-1.857l-1.604-.642a5.93 5.93 0 0 0-7.505 2.854l-.366.73-.975 2.439.182-2.544a12.24 12.24 0 0 0-2.133-7.822m0 0-.488-.366"/>
    </svg>
  );
}
