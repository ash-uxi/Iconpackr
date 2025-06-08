import React from 'react';

/**
 * PiTagDuoSolid icon from the duo-solid style in general category.
 */
interface PiTagDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTagDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'tag icon',
  ...props
}: PiTagDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M11.779 2.12c-.869-.175-1.774-.127-3.214-.051l-.998.052c-.729.038-1.334.07-1.828.135-.514.068-.986.179-1.43.418a4 4 0 0 0-1.635 1.634c-.239.445-.35.917-.418 1.431-.065.494-.097 1.099-.135 1.828l-.052.998c-.076 1.44-.124 2.345.05 3.214a7 7 0 0 0 .837 2.18c.451.763 1.092 1.403 2.112 2.423l2.66 2.66c1.18 1.18 1.943 1.944 2.792 2.377a6 6 0 0 0 5.448 0c.849-.433 1.612-1.196 2.792-2.377l.282-.282c1.18-1.18 1.944-1.943 2.377-2.792a6 6 0 0 0 0-5.448c-.433-.849-1.196-1.612-2.377-2.792l-2.66-2.66c-1.02-1.02-1.66-1.66-2.423-2.112a7 7 0 0 0-2.18-.836" opacity=".28" /> <path d="M8.51 8.513h.02m.96-.025a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </svg>
  );
}
