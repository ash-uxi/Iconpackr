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
 * Pigitfork01duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitfork01duosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git fork01 icon",
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
      d="M12 12h-1.2c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.23-.45-.298-.997-.318-1.862H6m6 3.5v3.5m0-3.5h1.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.23-.45.298-.997.318-1.862H18"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M12 14.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8M18 1.5a4 4 0 0 0-.012 8H18a4 4 0 0 0 0-8M6 1.5a4 4 0 1 0 0 8h.012A4 4 0 0 0 6 1.5"
    />
  </Svg>
);

export default Pigitfork01duosolid;
