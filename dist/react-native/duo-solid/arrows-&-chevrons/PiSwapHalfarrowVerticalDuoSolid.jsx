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
 * Piswaphalfarrowverticalduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswaphalfarrowverticalduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swap halfarrow vertical icon",
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
    <path d="M14 17.344V6m-4 .656V18" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M18.876 16.63a1 1 0 0 1-.072 1.078 21.2 21.2 0 0 1-3.783 3.933c-.297.238-.659.36-1.021.36a1 1 0 0 1-1-1v-4.657h1q.852 0 1.703-.063l2.223-.165a1 1 0 0 1 .95.514M5.124 7.37a1 1 0 0 1 .072-1.078A21.2 21.2 0 0 1 8.979 2.36C9.276 2.121 9.638 2 10 2a1 1 0 0 1 1 1v4.656h-1q-.852 0-1.703.063l-2.223.165a1 1 0 0 1-.95-.514"
    />
  </Svg>
);

export default Piswaphalfarrowverticalduosolid;
