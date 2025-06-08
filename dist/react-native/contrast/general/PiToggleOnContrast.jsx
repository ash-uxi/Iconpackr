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
 * Pitoggleoncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitoggleoncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "toggle on icon",
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
    <path
      fill={color}
      d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 1 0 0-14"
      opacity={0.28}
    />
    <path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 1 0 0-14" />
    <path d="M19 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0" />
  </Svg>
);

export default Pitoggleoncontrast;
