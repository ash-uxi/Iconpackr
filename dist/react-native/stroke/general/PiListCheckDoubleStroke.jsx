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
 * Pilistcheckdoublestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistcheckdoublestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list check double icon",
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
      d="M12 12H21M12 18H21M12 6L21 6M3 8.10466L4.89736 10C5.80992 8.40431 7.07282 7.0366 8.59087 6M3 16.1047L4.89736 18C5.80992 16.4043 7.07282 15.0366 8.59087 14"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilistcheckdoublestroke;
