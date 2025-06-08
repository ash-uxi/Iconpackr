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
 * Piarrowleftdownduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftdownduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left down icon",
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
      d="M5.656 18.344a1.95 1.95 0 0 1-.559-1.166 31.2 31.2 0 0 1 .157-8.054 1 1 0 0 1 1.696-.56l8.486 8.486a1 1 0 0 1-.56 1.696c-2.672.4-5.38.453-8.054.157a1.95 1.95 0 0 1-1.166-.559"
    />{" "}
    <path d="M6.363 17.637 19.091 4.909" opacity={0.28} />
  </Svg>
);

export default Piarrowleftdownduosolid;
