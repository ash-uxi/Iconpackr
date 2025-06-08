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
 * Piarrowrightdownduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightdownduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right down icon",
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
    <path d="M17.637 17.637 4.909 4.909" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M18.344 18.344c.306-.306.509-.713.559-1.166a31.2 31.2 0 0 0-.157-8.054 1 1 0 0 0-1.696-.56L8.564 17.05a1 1 0 0 0 .56 1.696c2.672.4 5.38.453 8.054.157a1.95 1.95 0 0 0 1.166-.559"
    />
  </Svg>
);

export default Piarrowrightdownduosolid;
