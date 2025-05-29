import React from 'react';

/**
 * PiTrezorWalletContrast icon from the contrast style in apps-&-social category.
 */
interface PiTrezorWalletContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PiTrezorWalletContrast({
  size = 24,
  color,
  className,
  ...props
}: PiTrezorWalletContrastProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{color: color || "currentColor"}}
      
      {...props}
    >
      
    </svg>
  );
}
