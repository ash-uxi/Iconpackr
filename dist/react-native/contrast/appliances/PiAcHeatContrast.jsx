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
 * Piacheatcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piacheatcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ac heat icon",
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
      <path d="M20 4H4a2 2 0 0 0-2 2v6h20V6a2 2 0 0 0-2-2M17.237 15c1.676 1.532 2.579 2.601 2.579 4.421 0 1.39-1.176 2.579-2.58 2.579-1.403 0-2.578-1.19-2.578-2.579 0-.425.16-.845.368-1.105 1.907 1.315 3.48-1.129 2.21-3.316" />
    </g>
    <path d="M18 8h-2m6 4V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6zm-4.763 3c1.676 1.532 2.579 2.601 2.579 4.421 0 1.39-1.176 2.579-2.58 2.579-1.403 0-2.578-1.19-2.578-2.579 0-.425.16-.845.368-1.105 1.907 1.315 3.48-1.129 2.21-3.316" />
  </Svg>
);

export default Piacheatcontrast;
