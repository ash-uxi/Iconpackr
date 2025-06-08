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
 * Piballtennisduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piballtennisduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ball tennis icon",
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
      d="M14.627 2.196a10.13 10.13 0 0 0-8.694 1.667 10.1 10.1 0 0 0-3.737 5.51 10.1 10.1 0 0 0 .48 6.64 10.13 10.13 0 0 0 6.697 5.791c3.12.836 6.292.122 8.694-1.666a10.1 10.1 0 0 0 3.737-5.511 10.1 10.1 0 0 0-.481-6.64 10.13 10.13 0 0 0-6.696-5.791"
      opacity={0.28}
    />{" "}
    <path d="M20.405 8.382a6.003 6.003 0 0 0-2.935 10.954M6.53 4.665a6.003 6.003 0 0 1-2.934 10.953" />
  </Svg>
);

export default Piballtennisduosolid;
