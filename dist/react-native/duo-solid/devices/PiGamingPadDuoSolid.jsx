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
 * Pigamingpadduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigamingpadduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "gaming pad icon",
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
    <path d="M8 13v-2m0 0V9m0 2H6m2 0h2m5.01-2-.01.001M18.01 12l-.01.001" />{" "}
    <path
      fill={color || "#000"}
      d="M8.667 4A7.667 7.667 0 0 0 1 11.667v5.243a4.09 4.09 0 0 0 7.749 1.829l.145-.292A2.62 2.62 0 0 1 11.236 17h1.528c.992 0 1.898.56 2.342 1.447l.146.292A4.09 4.09 0 0 0 23 16.909v-5.242A7.667 7.667 0 0 0 15.333 4z"
      opacity={0.28}
    />
  </Svg>
);

export default Pigamingpadduosolid;
