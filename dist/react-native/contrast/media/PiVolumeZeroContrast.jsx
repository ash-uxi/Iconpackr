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
 * Pivolumezerocontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivolumezerocontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "volume zero icon",
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
      d="M17 18.932V5.107c0-1.71-1.934-2.706-3.326-1.711L10.86 5.405a4.9 4.9 0 0 1-1.898.822A4.93 4.93 0 0 0 5 11.061v1.918a4.93 4.93 0 0 0 3.963 4.833c.683.137 1.33.417 1.898.823l2.813 2.009c1.392.994 3.326 0 3.326-1.712"
      opacity={0.28}
    />
    <path d="M17 18.932V5.107c0-1.71-1.934-2.706-3.326-1.711L10.86 5.405a4.9 4.9 0 0 1-1.898.822A4.93 4.93 0 0 0 5 11.061v1.918a4.93 4.93 0 0 0 3.963 4.833c.683.137 1.33.417 1.898.823l2.813 2.009c1.392.994 3.326 0 3.326-1.712" />
  </Svg>
);

export default Pivolumezerocontrast;
