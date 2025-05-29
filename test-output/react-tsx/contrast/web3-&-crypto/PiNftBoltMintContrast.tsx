import React from 'react';

/**
 * PiNftBoltMintContrast icon from the contrast style in web3-&-crypto category.
 */
interface PiNftBoltMintContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PiNftBoltMintContrast({
  size = 24,
  color,
  className,
  ...props
}: PiNftBoltMintContrastProps): JSX.Element {
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
