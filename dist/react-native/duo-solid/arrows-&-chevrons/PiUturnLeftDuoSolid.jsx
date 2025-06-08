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
 * Piuturnleftduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuturnleftduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "uturn left icon",
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
    <path d="M4 8h11a5 5 0 0 1 0 10h-3" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M9.028 3.99a1 1 0 0 0-1.586-.882A21.8 21.8 0 0 0 3.37 6.964a1.64 1.64 0 0 0 0 2.071 21.8 21.8 0 0 0 4.073 3.856 1 1 0 0 0 1.586-.882l-.17-2.32a23 23 0 0 1 0-3.38z"
    />
  </Svg>
);

export default Piuturnleftduosolid;
