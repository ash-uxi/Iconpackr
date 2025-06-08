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
 * Pimaximizelinearrowduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimaximizelinearrowduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "maximize line arrow icon",
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
      d="M19.448 3.09c-1.841-.17-3.708-.1-5.553.21a1 1 0 0 0-.487 1.744l1.663 1.429a23 23 0 0 1 2.46 2.459l1.427 1.662a1 1 0 0 0 1.745-.486 21.6 21.6 0 0 0 .21-5.554 1.62 1.62 0 0 0-1.465-1.464M5.044 13.406a1 1 0 0 0-1.744.486 21.6 21.6 0 0 0-.21 5.554 1.62 1.62 0 0 0 1.464 1.463c1.842.17 3.708.1 5.554-.209a1 1 0 0 0 .486-1.744l-1.662-1.428a23 23 0 0 1-2.46-2.46z"
    />{" "}
    <path d="M6.948 17.052 17.053 6.947" opacity={0.28} />
  </Svg>
);

export default Pimaximizelinearrowduosolid;
