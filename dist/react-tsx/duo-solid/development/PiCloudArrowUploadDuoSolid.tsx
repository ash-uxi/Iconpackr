import React from 'react';

/**
 * PiCloudArrowUploadDuoSolid icon from the duo-solid style in development category.
 */
interface PiCloudArrowUploadDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudArrowUploadDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-arrow-upload icon',
  ...props
}: PiCloudArrowUploadDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12.5 2a7.5 7.5 0 0 1 6.627 3.986 44 44 0 0 0 .347.64l-.003-.005.007.01a.4.4 0 0 0 .067.068q.04.03.125.09c.116.082.278.193.506.35A6.5 6.5 0 0 1 16.5 19h-10A5.5 5.5 0 0 1 3.609 8.82c.475-.294.824-.51 1.068-.664a11 11 0 0 0 .325-.215.3.3 0 0 0 .046-.055l.004-.005.02-.041c.023-.051.055-.124.099-.228.082-.198.193-.473.344-.848A7.5 7.5 0 0 1 12.5 2" opacity=".28" /> <path d="M16 15.63a19 19 0 0 0-3.445-3.232.94.94 0 0 0-1.11 0A19 19 0 0 0 8 15.63M12 21v-8.773" />
    </svg>
  );
}
