import React from 'react';

/**
 * PiWineGlassFilledDuoSolid icon from the duo-solid style in food category.
 */
interface PiWineGlassFilledDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWineGlassFilledDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'wine-glass-filled icon',
  ...props
}: PiWineGlassFilledDuoSolidProps): JSX.Element {
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
      <path d="M12 13v9m0 0h4m-4 0H8m9.979-14.562a7 7 0 0 0 .021-.55A10 10 0 0 0 16.698 2H7.302A10 10 0 0 0 6 6.889c0 .554.065 1.091.189 1.602" opacity=".28" /> <path fill={color || "currentColor"} d="M18.975 7.516a1 1 0 0 0-1.39-.997c-2.036.872-3.418 1.343-5.182.566-2.535-1.117-4.603-.373-6.608.486a1 1 0 0 0-.578 1.156C5.953 11.755 8.51 14 12 14c3.961 0 6.692-2.883 6.975-6.484" />
    </svg>
  );
}
