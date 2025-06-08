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
 * Pitoggleoffcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitoggleoffcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "toggle off icon",
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
    <path d="M5 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0" />
    <path
      fill={color}
      d="M9 5h6a7 7 0 1 1 0 14H9A7 7 0 1 1 9 5"
      opacity={0.28}
    />
    <path d="M9 5h6a7 7 0 1 1 0 14H9A7 7 0 1 1 9 5" />
  </Svg>
);

export default Pitoggleoffcontrast;
