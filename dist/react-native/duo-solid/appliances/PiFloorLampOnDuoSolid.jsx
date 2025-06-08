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
 * Pifloorlamponduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifloorlamponduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "floor lamp on icon",
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
    <path d="M12 21V10M9 21h6" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M16.894 12.553a1 1 0 1 0-1.788.894l1 2a1 1 0 1 0 1.788-.894zM6.99 4.027A3 3 0 0 1 9.83 2h4.342a3 3 0 0 1 2.838 2.027l1.937 5.649A1 1 0 0 1 18 11H6a1 1 0 0 1-.946-1.324zM8.894 13.447a1 1 0 1 0-1.788-.894l-1 2a1 1 0 1 0 1.788.894z"
    />
  </Svg>
);

export default Pifloorlamponduosolid;
