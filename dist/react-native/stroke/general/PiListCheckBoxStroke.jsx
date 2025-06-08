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
 * Pilistcheckboxstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistcheckboxstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list check box icon",
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
      d="M12 12H21M12 18H21M12 6L21 6M3 16.1047L4.89736 18C5.80992 16.4043 7.07282 15.0366 8.59087 14M4 10H7C7.55228 10 8 9.55228 8 9V6C8 5.44772 7.55228 5 7 5H4C3.44772 5 3 5.44772 3 6V9C3 9.55228 3.44772 10 4 10Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilistcheckboxstroke;
