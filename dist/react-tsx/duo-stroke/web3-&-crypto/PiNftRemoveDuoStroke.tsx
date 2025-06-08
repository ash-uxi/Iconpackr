import React from 'react';

/**
 * PiNftRemoveDuoStroke icon from the duo-stroke style in web3-&-crypto category.
 */
interface PiNftRemoveDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNftRemoveDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'nft-remove icon',
  ...props
}: PiNftRemoveDuoStrokeProps): JSX.Element {
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
      <path d="M11.523 21h-.777c-1.38 0-2.07 0-2.685-.202a4 4 0 0 1-1.466-.856c-.477-.437-.812-1.036-1.482-2.234l-1.454-2.6c-.635-1.134-.952-1.702-1.076-2.302a4 4 0 0 1 0-1.612c.124-.6.441-1.168 1.076-2.302l1.454-2.6c.67-1.198 1.005-1.797 1.482-2.233a4 4 0 0 1 1.466-.857C8.676 3 9.366 3 10.746 3h2.486c1.38 0 2.07 0 2.685.202.545.179 1.044.47 1.466.857.477.436.812 1.035 1.482 2.233l1.49 2.663c.622 1.112.933 1.668 1.058 2.258.111.522.116 1.06.014 1.585-.115.591-.417 1.153-1.02 2.276l-.027.051" opacity=".28" fill="none"/>
  <path  d="M8.968 7A2.003 2.003 0 0 0 6.96 9c0 1.111.905 2 2.007 2a2.003 2.003 0 0 0 2.007-2c0-1.111-.905-2-2.007-2m10.005 3h.818c.353.64.52.975.608 1.28q.021.072.036.141.06.287.064.579h-1.462c-.956 0-1.37 0-1.71.03-3.903.34-6.988 3.41-7.328 7.273a9 9 0 0 0-.028.695c-.38-.003-.673-.01-.924-.03a2.8 2.8 0 0 1-.675-.12 3 3 0 0 1-.395-.162c.005-.208.014-.388.03-.558.426-4.84 4.287-8.668 9.147-9.09.437-.038.944-.038 1.82-.038M15 18a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" fill="none"/>
    </svg>
  );
}
