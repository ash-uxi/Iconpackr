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
 * Piarrowrightduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right icon",
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
    <path d="M20 12H2" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M21 12c0-.432-.144-.864-.429-1.22a31.2 31.2 0 0 0-5.807-5.584A1 1 0 0 0 13.17 6v12a1 1 0 0 0 1.594.804 31.2 31.2 0 0 0 5.807-5.584c.285-.356.43-.788.43-1.22"
    />
  </Svg>
);

export default Piarrowrightduosolid;
