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
 * Pivolumemutecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivolumemutecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "volume mute icon",
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
      d="M14 18.913V5.088c0-1.711-1.934-2.706-3.326-1.712L7.86 5.386a4.9 4.9 0 0 1-1.898.822A4.93 4.93 0 0 0 2 11.04v1.918a4.93 4.93 0 0 0 3.963 4.834 4.9 4.9 0 0 1 1.898.822l2.813 2.01c1.392.994 3.326-.001 3.326-1.712"
      opacity={0.28}
    />
    <path d="m22 10-5 5m5 0-5-5m-3-4.912v13.825c0 1.71-1.934 2.706-3.326 1.711L7.86 18.615a4.9 4.9 0 0 0-1.898-.822A4.93 4.93 0 0 1 2 12.959v-1.918a4.93 4.93 0 0 1 3.963-4.833 4.9 4.9 0 0 0 1.898-.823l2.813-2.009c1.392-.994 3.326 0 3.326 1.712" />
  </Svg>
);

export default Pivolumemutecontrast;
