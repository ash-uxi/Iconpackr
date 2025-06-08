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
 * Pidemergeduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidemergeduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "demerge icon",
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
      d="M10.108 3.3a21.6 21.6 0 0 0-5.554-.21A1.62 1.62 0 0 0 3.09 4.554c-.17 1.842-.1 3.708.21 5.554a1 1 0 0 0 1.744.486 52 52 0 0 1 5.55-5.55 1 1 0 0 0-.486-1.744M19.446 3.09c-1.842-.17-3.708-.1-5.554.21a1 1 0 0 0-.486 1.744 52 52 0 0 1 5.55 5.55 1 1 0 0 0 1.744-.486c.31-1.846.38-3.712.21-5.554a1.62 1.62 0 0 0-1.465-1.464"
    />{" "}
    <path d="M7.007 7.007 12 12v8m4.993-12.993L15 9" opacity={0.28} />
  </Svg>
);

export default Pidemergeduosolid;
