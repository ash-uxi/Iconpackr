import React from 'react';

/**
 * PiBottleMilkGlassContrast icon from the contrast style in food category.
 */
interface PiBottleMilkGlassContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBottleMilkGlassContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'bottle-milk-glass icon',
  ...props
}: PiBottleMilkGlassContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M13 2H6v3.056c0 .352 0 .528-.024.7a2.5 2.5 0 0 1-.107.451c-.055.165-.134.323-.291.638l-1.156 2.31c-.157.315-.236.473-.291.638a2.5 2.5 0 0 0-.107.45c-.024.173-.024.35-.024.701V18c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C5.9 22 6.6 22 8 22h3c1.024 0 1.673 0 2.158-.107.446.107 1.033.107 1.992.107h.7c1.235 0 1.852 0 2.348-.227a2.5 2.5 0 0 0 1.066-.928c.294-.46.379-1.072.549-2.295l.631-4.55-.594.486c-.576.471-.864.707-1.18.845a2.5 2.5 0 0 1-1.472.164c-.338-.065-.67-.231-1.336-.564-.386-.193-.645-.322-.862-.407a2 2 0 0 0-.314-.098 2.5 2.5 0 0 0-1.326.066c-.292.097-.568.271-1.12.62L10.833 16 10 10h4.93a3 3 0 0 0-.06-.207c-.056-.165-.135-.323-.292-.638l-1.156-2.31c-.157-.315-.236-.473-.292-.638a2.5 2.5 0 0 1-.106-.45C13 5.583 13 5.406 13 5.055z" opacity=".28"/>
  <path d="M6 2h7M6 2v3.056c0 .352 0 .528-.024.7a2.5 2.5 0 0 1-.107.451c-.055.165-.134.323-.291.638l-1.156 2.31c-.157.315-.236.473-.291.638a2.5 2.5 0 0 0-.107.45c-.024.173-.024.35-.024.701V18c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C5.9 22 6.6 22 8 22h3c1.024 0 1.673 0 2.158-.107M6 2H5m8 0v3.056c0 .352 0 .528.024.7q.033.23.107.451c.055.165.134.323.291.638l1.156 2.31c.157.315.236.473.292.638q.033.102.06.207M13 2h1m-3.167 14 .354 2.55c.17 1.223.255 1.834.549 2.294a2.5 2.5 0 0 0 1.066.929q.164.075.356.12M10.833 16 10 10h4.93m-4.097 6 1.407-.888c.552-.349.828-.523 1.12-.62a2.5 2.5 0 0 1 1.326-.066c.102.023.203.055.314.098.217.085.476.214.862.407.665.333.998.499 1.336.564a2.5 2.5 0 0 0 1.473-.164c.315-.138.603-.374 1.18-.845l.593-.486m0 0L21 10h-6.07m5.514 4-.631 4.55c-.17 1.223-.255 1.834-.549 2.294a2.5 2.5 0 0 1-1.066.929c-.496.227-1.113.227-2.347.227h-.702c-.958 0-1.545 0-1.991-.107"/>
    </svg>
  );
}
