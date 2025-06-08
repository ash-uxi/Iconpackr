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
 * Pichocolatebarstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichocolatebarstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chocolate bar icon",
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
      d="M19 15V8C17.4864 8 16.2346 6.87906 16.0295 5.42203C16.0054 5.42237 15.9813 5.42254 15.9572 5.42254C13.747 5.42254 11.8717 3.98845 11.2112 2H7.5C6.11929 2 5 3.11929 5 4.5V15M19 15V19.5C19 20.8807 17.8807 22 16.5 22H12M19 15H5M12 22H7.5C6.11929 22 5 20.8807 5 19.5V15M12 22V3.47913M5 9H19"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pichocolatebarstroke;
