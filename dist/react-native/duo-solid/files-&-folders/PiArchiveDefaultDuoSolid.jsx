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
 * Piarchivedefaultduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarchivedefaultduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "archive default icon",
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
    <path d="M10 12h4" />{" "}
    <path
      fill={color || "#000"}
      d="M20 10v7a4 4 0 0 1-1.035 2.685l-.137.143A4 4 0 0 1 16 21H8a4 4 0 0 1-4-4v-7z"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M3 3h18a1 1 0 0 1 .634.227l.073.066A1 1 0 0 1 22 4v1a1 1 0 0 1-1 1H3a1 1 0 0 1-.634-.227l-.073-.066A1 1 0 0 1 2 5V4l.005-.099a1 1 0 0 1 .222-.535l.066-.073a1 1 0 0 1 .608-.288z"
    />
  </Svg>
);

export default Piarchivedefaultduosolid;
