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
 * Picakeduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picakeduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cake icon",
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
      d="M13 2a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0zM18 2a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z"
    />{" "}
    <path
      d="M21 20H3m18 0h1m-1 0v-5M3 20H2m1 0v-5m9-10v3M7 5v3.002M17 5v3.002"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M7.798 7h8.404q.435 0 .805.002c1.121.008 2.033.038 2.809.434a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01V15a1 1 0 0 1-.97.999 2.21 2.21 0 0 1-2.1-1.316.228.228 0 0 0-.416 0c-.786 1.756-3.279 1.756-4.065 0a.228.228 0 0 0-.416 0c-.787 1.756-3.28 1.756-4.066 0a.228.228 0 0 0-.416 0c-.786 1.756-3.279 1.756-4.065 0a.228.228 0 0 0-.416 0A2.21 2.21 0 0 1 2.97 16a1 1 0 0 1-.97-1v-2.24c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.776-.396 1.688-.426 2.809-.434Q7.364 7 7.798 7M8 2a1 1 0 1 0-2 0v.01a1 1 0 0 0 2 0z"
    />
  </Svg>
);

export default Picakeduosolid;
