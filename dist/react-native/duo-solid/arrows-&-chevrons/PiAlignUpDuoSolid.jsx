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
 * Pialignupduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignupduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align up icon",
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
      fill={color || "#000"}
      d="M13 20a1 1 0 1 1-2 0v-7.124q-1.503.03-3.003.152a1 1 0 0 1-.886-1.59 21.8 21.8 0 0 1 3.853-4.069 1.64 1.64 0 0 1 2.072 0 21.8 21.8 0 0 1 3.852 4.069 1 1 0 0 1-.886 1.59q-1.499-.122-3.002-.152z"
    />{" "}
    <path d="M5 4h14" opacity={0.28} />
  </Svg>
);

export default Pialignupduosolid;
