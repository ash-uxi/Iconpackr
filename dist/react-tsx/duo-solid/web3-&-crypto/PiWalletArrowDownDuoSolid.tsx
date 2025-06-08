import React from 'react';

/**
 * PiWalletArrowDownDuoSolid icon from the duo-solid style in web3-&-crypto category.
 */
interface PiWalletArrowDownDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWalletArrowDownDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'wallet-arrow-down icon',
  ...props
}: PiWalletArrowDownDuoSolidProps): JSX.Element {
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
      <path d="M14 12h3m.428 7.592c.635.846 1.371 1.61 2.192 2.275.11.09.245.135.38.135m2.571-2.41a12.9 12.9 0 0 1-2.19 2.275.6.6 0 0 1-.381.135m0 0v-6" /> <path fill={color || "currentColor"} d="M18.994 6.344c-.017-.728-.075-1.336-.298-1.875a4 4 0 0 0-2.165-2.165c-.418-.173-.852-.241-1.321-.273C14.757 2 14.204 2 13.534 2H9.956c-1.363 0-2.447 0-3.321.071-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.582 2.359C1 8.509 1 9.593 1 10.956v3.666c0 1.23-.001 2.569.457 3.674a6 6 0 0 0 3.247 3.247c.602.25 1.244.356 1.992.407.732.05 1.634.05 2.768.05h5.072l.971-.001q-.246-.297-.479-.607A3 3 0 0 1 17 16.622v-.62a3 3 0 0 1 5.988-.264c.012-.375.012-.75.012-1.116v-.158c0-1.134 0-2.036-.05-2.768-.05-.748-.157-1.39-.407-1.992a6 6 0 0 0-3.247-3.247q-.15-.062-.302-.113m-3.92-2.318c.367.025.558.07.691.126a2 2 0 0 1 1.083 1.083c.07.169.11.382.132.797C16.312 6 15.532 6 14.6 6H9.465c-1.134 0-2.036 0-2.768.05-.748.05-1.39.158-1.992.407a6 6 0 0 0-1.603.983c.068-.567.177-.947.335-1.256a4 4 0 0 1 1.748-1.748c.37-.189.842-.308 1.614-.371C7.58 4 8.583 4 10 4h3.5c.713 0 1.197 0 1.573.026" opacity=".28" />
    </svg>
  );
}
