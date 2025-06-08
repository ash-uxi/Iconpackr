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
 * Pialignverticalcenterduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignverticalcenterduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align vertical center icon",
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
      d="M5 12H19"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9 6.68403C9.77778 7.88031 10.6864 8.95475 11.7028 9.88084C11.79 9.96028 11.895 10 12 10M15 6.68402C14.2222 7.88031 13.3136 8.95475 12.2972 9.88084C12.21 9.96028 12.105 10 12 10M12 10V3M15 17.316C14.2222 16.1197 13.3136 15.0452 12.2972 14.1192C12.21 14.0397 12.105 14 12 14M9 17.316C9.77778 16.1197 10.6864 15.0452 11.7028 14.1192C11.79 14.0397 11.895 14 12 14M12 14L12 21"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pialignverticalcenterduostroke;
