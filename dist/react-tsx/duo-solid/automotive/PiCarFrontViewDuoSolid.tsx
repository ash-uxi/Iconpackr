import React from 'react';

/**
 * PiCarFrontViewDuoSolid icon from the duo-solid style in automotive category.
 */
interface PiCarFrontViewDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCarFrontViewDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'car-front-view icon',
  ...props
}: PiCarFrontViewDuoSolidProps): JSX.Element {
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
      <path d="M21.655 10.352a3 3 0 0 0-.093-.232c-.112-.25-.27-.478-.588-.936L19.51 7.068c-.524-.757-.786-1.135-1.127-1.409a3 3 0 0 0-1.02-.534C16.944 5 16.484 5 15.563 5h-7.47c-.92 0-1.38 0-1.8.125a3 3 0 0 0-1.019.534c-.341.274-.603.652-1.127 1.409L2.681 9.184c-.317.458-.475.687-.588.936a3 3 0 0 0-.093.232" opacity=".28" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M23.17 11.652a1 1 0 1 0-.34-1.971q-.555.096-1.146.181c-2.771.402-6.099.638-9.684.638s-6.912-.236-9.684-.638a45 45 0 0 1-1.147-.181 1 1 0 0 0-.338 1.971l.196.033a1 1 0 0 0-.027.231V19a3 3 0 0 0 6 .004c2.364.012 4.73.007 7.093.002h.002Q15.549 19.002 17 19a3 3 0 0 0 6 0v-7.085q0-.12-.027-.23zM4.901 13.735a1 1 0 0 1 1.063-.933q.586.04 1.189.07a1 1 0 1 1-.107 1.998 99 99 0 0 1-1.212-.072 1 1 0 0 1-.933-1.063m13.264 1.063a1 1 0 1 0-.131-1.996q-.587.04-1.188.07a1 1 0 1 0 .106 1.998q.615-.033 1.213-.072" clipRule="evenodd" /> <rect width="24" height="24" fill={color || "currentColor"} />
    </svg>
  );
}
