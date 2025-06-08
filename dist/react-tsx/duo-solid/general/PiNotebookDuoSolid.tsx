import React from 'react';

/**
 * PiNotebookDuoSolid icon from the duo-solid style in general category.
 */
interface PiNotebookDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNotebookDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'notebook icon',
  ...props
}: PiNotebookDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M1.504 4.198C4.772 2.331 8.929 2.95 12 4.006c3.071-1.056 7.228-1.675 10.496.192a1 1 0 0 1 .504.869v15.5a1 1 0 0 1-1.394.919c-2.795-1.198-6.322-.38-9.192.924a1 1 0 0 1-.828 0c-2.87-1.304-6.398-2.122-9.192-.924A1 1 0 0 1 1 20.566v-15.5a1 1 0 0 1 .504-.868" opacity=".28" /> <path d="M12 21.504V5" />
    </svg>
  );
}
