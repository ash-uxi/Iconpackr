import React from "react";
import Svg, {
  Path,
  Rect,
  Circle,
  Ellipse,
  Line,
  Polygon,
  Polyline,
} from "react-native-svg";

/**
 * Piusertwocontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piusertwocontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user two icon",
  style,
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    accessibilityRole="image"
    accessibilityLabel={accessibilityLabel}
    style={style}
    {...props}
  >
    <g fill={color} opacity={0.28}>
      <path d="M16.886 2.605a1 1 0 0 0-1.369 1.333c.469.918.733 1.957.733 3.062a6.7 6.7 0 0 1-.733 3.062 1 1 0 0 0 1.369 1.333 5 5 0 0 0 0-8.79M20.07 14.252a1 1 0 0 0-1.184 1.44c.55.977.864 2.104.864 3.308 0 .583-.105 1.139-.295 1.652A1 1 0 0 0 20.393 22h.107a3 3 0 0 0 3-3 5 5 0 0 0-3.43-4.748M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M2 19a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" />
    </g>
    <path d="M20.395 21h.105a2 2 0 0 0 2-2 4 4 0 0 0-2.734-3.796M16.404 3.481a4 4 0 0 1 0 7.037M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M6 15h7a4 4 0 0 1 4 4 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 4 4 0 0 1 4-4" />
  </Svg>
);

export default Piusertwocontrast;
