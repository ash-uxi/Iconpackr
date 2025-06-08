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
 * Piuturnupduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuturnupduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "uturn up icon",
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
    <path d="M16 4v11a5 5 0 0 1-10 0v-3" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M20.01 9.028a1 1 0 0 0 .882-1.586 21.8 21.8 0 0 0-3.857-4.073 1.64 1.64 0 0 0-2.07 0 21.8 21.8 0 0 0-3.857 4.073 1 1 0 0 0 .882 1.586l2.32-.17a23 23 0 0 1 3.38 0z"
    />
  </Svg>
);

export default Piuturnupduosolid;
