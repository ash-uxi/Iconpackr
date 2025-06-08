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
 * Piswaparrowverticalduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswaparrowverticalduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swap arrow vertical icon",
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
      d="M12.074 16.116a1 1 0 0 0-.878 1.592 21.2 21.2 0 0 0 3.783 3.933 1.63 1.63 0 0 0 2.042 0 21.2 21.2 0 0 0 3.783-3.933 1 1 0 0 0-.878-1.592l-2.223.165a23 23 0 0 1-3.406 0z"
    />{" "}
    <path d="M16 17.344V7m-8-.344V17" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M3.196 6.292a1 1 0 0 0 .878 1.592l2.223-.165a23 23 0 0 1 3.406 0l2.223.165a1 1 0 0 0 .878-1.592A21.2 21.2 0 0 0 9.021 2.36a1.63 1.63 0 0 0-2.042 0 21.2 21.2 0 0 0-3.783 3.933"
    />
  </Svg>
);

export default Piswaparrowverticalduosolid;
