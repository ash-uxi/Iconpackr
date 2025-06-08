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
 * Piuserpluscontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserpluscontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user plus icon",
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
      <path d="M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7 15a4 4 0 0 0-4 4 2 2 0 0 0 2 2h11.352a1 1 0 0 0-.353-.762h.003A3 3 0 0 1 15 18a3 3 0 0 1-3-3z" />
    </g>
    <path d="M15.352 21H5a2 2 0 0 1-2-2 4 4 0 0 1 4-4h4m7 3v-3m0 0v-3m0 3h-3m3 0h3m-6-8a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
  </Svg>
);

export default Piuserpluscontrast;
