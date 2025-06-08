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
 * Piswaparrowhorizontalduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswaparrowhorizontalduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swap arrow horizontal icon",
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
      d="M17.708 3.196a1 1 0 0 0-1.592.878l.165 2.223a23 23 0 0 1 0 3.406l-.165 2.223a1 1 0 0 0 1.592.878 21.2 21.2 0 0 0 3.933-3.783 1.63 1.63 0 0 0 0-2.042 21.2 21.2 0 0 0-3.933-3.783"
    />{" "}
    <path d="M6.656 16H17m.344-8H7" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M7.884 12.074a1 1 0 0 0-1.592-.878 21.2 21.2 0 0 0-3.933 3.783 1.63 1.63 0 0 0 0 2.042 21.2 21.2 0 0 0 3.933 3.783 1 1 0 0 0 1.592-.878l-.165-2.223a23 23 0 0 1 0-3.406z"
    />
  </Svg>
);

export default Piswaparrowhorizontalduosolid;
