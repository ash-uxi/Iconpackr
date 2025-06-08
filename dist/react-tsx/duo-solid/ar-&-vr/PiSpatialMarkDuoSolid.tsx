import React from 'react';

/**
 * PiSpatialMarkDuoSolid icon from the duo-solid style in ar-&-vr category.
 */
interface PiSpatialMarkDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSpatialMarkDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'spatial-mark icon',
  ...props
}: PiSpatialMarkDuoSolidProps): JSX.Element {
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
      <path d="M13.9426 1.93526C12.7345 1.26409 11.2655 1.2641 10.0574 1.93526L4.05743 5.26859C2.78757 5.97407 2 7.31255 2 8.76522V15.2348C2 16.6875 2.78757 18.0259 4.05743 18.7314L10.0574 22.0648C11.2655 22.7359 12.7345 22.7359 13.9426 22.0648L19.9426 18.7314C21.2124 18.0259 22 16.6875 22 15.2348V8.76522C22 7.31255 21.2124 5.97407 19.9426 5.26859L13.9426 1.93526Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M22 14.8505L16.6011 11.7334L16.6011 20.5878L14.6011 21.699L14.6011 15.7009L12.4939 16.8715L6.71509 20.2079L4.67661 19.0754L9.97207 16.0181L7.91543 14.8755L7.90107 14.8674L2 11.4604V9.15101L7.40107 12.2693L7.40107 3.41104L9.40107 2.29993L9.40107 8.30186L11.5082 7.13124L17.2884 3.79406L19.3268 4.92654L14.0301 7.98463L16.0867 9.12722L16.1011 9.13535L22 12.5411V14.8505ZM12.0011 9.14533L14.6011 10.5898L14.6011 13.413L12.0011 14.8574L9.40107 13.413V10.5898L12.0011 9.14533Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
