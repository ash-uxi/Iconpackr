import React from 'react';

/**
 * PiCycleCyclingDuoSolid icon from the duo-solid style in automotive category.
 */
interface PiCycleCyclingDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCycleCyclingDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cycle-cycling icon',
  ...props
}: PiCycleCyclingDuoSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <g opacity="0.28"><path d="M1.5 17.5C1.5 15.2908 3.29088 13.5 5.5 13.5C7.70912 13.5 9.5 15.2908 9.5 17.5C9.5 19.7092 7.70912 21.5 5.5 21.5C3.29088 21.5 1.5 19.7092 1.5 17.5Z" fill={color || "currentColor"} /><path d="M14.5 17.5C14.5 15.2908 16.2908 13.5 18.5 13.5C20.7092 13.5 22.5 15.2908 22.5 17.5C22.5 19.7092 20.7092 21.5 18.5 21.5C16.2908 21.5 14.5 19.7092 14.5 17.5Z" fill={color || "currentColor"} /></g> <path d="M14.5 6C14.5 4.34315 15.8431 3 17.5 3C19.1569 3 20.5 4.34315 20.5 6C20.5 7.65685 19.1569 9 17.5 9C15.8431 9 14.5 7.65685 14.5 6Z" fill={color || "currentColor"} /> <path d="M9.73448 9.85067C10.5057 9.248 11.6041 9.28445 12.3199 9.92983L13.4623 10.9599C14.1709 11.5989 15.0474 12.0217 15.9886 12.1786L17.8356 12.4864C18.3804 12.5772 18.8956 12.2092 18.9864 11.6644C19.0772 11.1196 18.7092 10.6044 18.1644 10.5136L16.3174 10.2058C15.7527 10.1117 15.2267 9.85795 14.8016 9.4746L13.6592 8.44449C12.211 7.13872 10.0275 7.08335 8.50295 8.27481C6.59163 9.7685 7.11998 12.86 9.50349 13.5409L10.8656 13.93C11.3842 14.0782 11.6919 14.6109 11.561 15.1342L10.5299 19.2574C10.3959 19.7932 10.7216 20.3361 11.2574 20.4701C11.7932 20.6041 12.3361 20.2784 12.4701 19.7426L13.5013 15.6194C13.8938 14.0497 12.9708 12.4514 11.415 12.007L10.0529 11.6178C9.29236 11.4006 9.0694 10.3704 9.73448 9.85067Z" fill={color || "currentColor"} />
    </svg>
  );
}
