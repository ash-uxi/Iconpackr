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
 * Pidiscountbadgeduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidiscountbadgeduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "discount badge icon",
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
      d="M14.868 21.005a3.925 3.925 0 0 1-5.736 0 1.93 1.93 0 0 0-1.472-.61 3.925 3.925 0 0 1-4.055-4.055 1.93 1.93 0 0 0-.61-1.472 3.925 3.925 0 0 1 0-5.736c.406-.38.628-.916.61-1.472A3.925 3.925 0 0 1 7.66 3.605a1.93 1.93 0 0 0 1.472-.61 3.925 3.925 0 0 1 5.736 0c.38.406.916.628 1.472.61a3.925 3.925 0 0 1 4.055 4.055 1.93 1.93 0 0 0 .61 1.472 3.925 3.925 0 0 1 0 5.736c-.406.38-.628.916-.61 1.472a3.925 3.925 0 0 1-4.055 4.055 1.93 1.93 0 0 0-1.472.61"
      clipRule="evenodd"
      opacity={0.28}
    />{" "}
    <path d="M9 15.364 15.364 9m-6.114.25h.01m5.854 5.864h.01M9.5 9.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0m5.864 5.864a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0" />
  </Svg>
);

export default Pidiscountbadgeduosolid;
