import React from 'react';

/**
 * PiWhatsappContrast icon from the contrast style in apps-&-social category.
 */
interface PiWhatsappContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWhatsappContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'whatsapp icon',
  ...props
}: PiWhatsappContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M21 12a9 9 0 0 1-12.15 8.434c-.319-.12-.478-.18-.596-.2a1.2 1.2 0 0 0-.315-.021c-.12.006-.251.037-.516.099l-1.488.347c-1.121.262-1.682.393-2.076.236a1.35 1.35 0 0 1-.754-.754c-.157-.394-.026-.955.236-2.076l.347-1.488c.062-.265.093-.397.1-.516.006-.12 0-.196-.021-.315-.022-.118-.081-.277-.2-.597A9 9 0 1 1 21 12" opacity=".28"/>
  <path d="M8.704 12.487c-.619-1.049-1.026-2.27-1.187-3.632a1.4 1.4 0 0 1-.016-.265c.022-.495.459-.986.948-1.066.198-.033.443-.028.645-.01.483.044.907.342 1.11.783.026.055.048.119.093.245.093.26.14.39.171.512a2.72 2.72 0 0 1-.785 2.666c-.092.085-.201.17-.42.338zm0 0a7.9 7.9 0 0 0 2.653 2.715m0 0c1.082.672 2.358 1.112 3.787 1.28.115.014.173.02.264.017.495-.022.986-.459 1.066-.948a2.6 2.6 0 0 0 .006-.683 1.36 1.36 0 0 0-.745-1.056 3 3 0 0 0-.32-.125c-.332-.118-.497-.177-.653-.213a2.71 2.71 0 0 0-2.433.638c-.118.107-.233.24-.462.503zM12 21a9 9 0 1 0-9-9c0 1.108.2 2.17.566 3.15.12.319.18.478.2.596.023.119.028.194.021.315-.006.12-.037.251-.099.516l-.347 1.488c-.262 1.121-.393 1.682-.236 2.076.137.344.41.617.754.754.394.157.955.026 2.076-.236l1.488-.347c.265-.062.397-.093.516-.1a1.2 1.2 0 0 1 .315.021c.118.022.277.081.597.2C9.83 20.8 10.892 21 12 21"/>
    </svg>
  );
}
