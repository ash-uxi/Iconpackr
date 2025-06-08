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
 * Piminuscirclecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piminuscirclecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "minus circle icon",
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
      d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0"
      opacity={0.28}
    />
    <path d="M9 12h6m6.15 0a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0" />
  </Svg>
);

export default Piminuscirclecontrast;
