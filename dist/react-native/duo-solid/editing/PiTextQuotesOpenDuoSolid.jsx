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
 * Pitextquotesopenduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitextquotesopenduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "text quotes open icon",
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
      d="M14 13.999A9.4 9.4 0 0 1 18 6.3M4 14A9.4 9.4 0 0 1 8 6.3"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M17 17.999a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-10 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
      clipRule="evenodd"
    />
  </Svg>
);

export default Pitextquotesopenduosolid;
