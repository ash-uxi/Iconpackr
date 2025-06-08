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
 * Piheartduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheartduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "heart icon",
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
      fillRule="evenodd"
      d="M12 3.836C10.147 1.93 7.612 1.605 5.458 2.42A6.925 6.925 0 0 0 1 8.944c0 3.944 2.508 7.208 4.957 9.41a22.7 22.7 0 0 0 3.55 2.613c.518.305.987.548 1.372.718.35.155.733.315 1.121.315s.772-.16 1.121-.315c.385-.17.854-.413 1.371-.718a22.7 22.7 0 0 0 3.552-2.614C20.492 16.153 23 12.888 23 8.944a6.92 6.92 0 0 0-4.46-6.52c-2.154-.813-4.688-.49-6.54 1.412"
      clipRule="evenodd"
      opacity={0.28}
    />{" "}
    <path d="M2 8.944C2 3.502 8.832.654 12 5.427c3.162-4.765 10-1.92 10 3.517" />
  </Svg>
);

export default Piheartduosolid;
