import React from 'react';

/**
 * PiLayerTwoDuoSolid icon from the duo-solid style in security category.
 */
interface PiLayerTwoDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLayerTwoDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'layer-two icon',
  ...props
}: PiLayerTwoDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12.543 4.298a3.1 3.1 0 0 0-1.086 0c-.41.073-.789.252-1.226.46L3.835 7.781c-.336.159-.647.306-.884.445-.228.133-.571.359-.768.75a1.72 1.72 0 0 0 0 1.545c.197.393.54.617.768.751.237.14.548.286.884.445l6.396 3.025c.437.207.816.386 1.226.46.359.063.727.063 1.086 0 .41-.074.789-.253 1.226-.46l6.396-3.025c.336-.159.647-.306.884-.445.228-.133.571-.358.768-.75a1.72 1.72 0 0 0 0-1.545c-.197-.392-.54-.618-.768-.751-.237-.14-.548-.286-.884-.445l-6.396-3.025c-.437-.207-.816-.386-1.226-.46" /> <path d="M20.923 14.574c-.118.235-.486.41-1.222.757l-6.272 2.966c-.524.248-.786.372-1.06.42a2.1 2.1 0 0 1-.737 0c-.275-.048-.537-.172-1.061-.42l-6.272-2.966c-.736-.348-1.104-.522-1.222-.757" opacity=".28" />
    </svg>
  );
}
