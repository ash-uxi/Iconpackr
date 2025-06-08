import React from 'react';

/**
 * PiTrezorWalletDuoSolid icon from the duo-solid style in apps-&-social category.
 */
interface PiTrezorWalletDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrezorWalletDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'trezor-wallet icon',
  ...props
}: PiTrezorWalletDuoSolidProps): JSX.Element {
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
      <path d="M7.5 8C6.11929 8 5 9.11929 5 10.5V17.1004C5 18.0233 5.50846 18.8712 6.32261 19.3058L10.8226 21.7082C11.5584 22.101 12.4416 22.101 13.1774 21.7082L17.6774 19.3058C18.4915 18.8712 19 18.0233 19 17.1004V10.5C19 9.11929 17.8807 8 16.5 8H7.5Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V8H16.5C16.6712 8 16.8384 8.01722 17 8.05001V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V8.05001C7.16156 8.01722 7.32877 8 7.5 8H9V7Z" fill={color || "currentColor"} />
    </svg>
  );
}
