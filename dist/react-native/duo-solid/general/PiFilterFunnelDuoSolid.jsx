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
 * Pifilterfunnelduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifilterfunnelduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "filter funnel icon",
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
    <path d="m14.293 12.707 5.414-5.414A1 1 0 0 0 20 6.586V4H4v2.586a1 1 0 0 0 .293.707l5.414 5.414" />{" "}
    <path
      fill={color || "#000"}
      d="M4 3a1 1 0 0 0-1 1v2.586A2 2 0 0 0 3.586 8L9 13.414V18a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 15 21v-7.586L20.414 8A2 2 0 0 0 21 6.586V4a1 1 0 0 0-1-1z"
      opacity={0.28}
    />
  </Svg>
);

export default Pifilterfunnelduosolid;
