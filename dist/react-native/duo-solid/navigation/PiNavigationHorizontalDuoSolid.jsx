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
 * Pinavigationhorizontalduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinavigationhorizontalduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "navigation horizontal icon",
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
      d="M10.694 2.71c.613-.947 2-.947 2.613 0a52.2 52.2 0 0 1 7.074 16.785l.127.559c.314 1.38-1.195 2.452-2.395 1.702L13.03 18.58a1.94 1.94 0 0 0-2.06 0l-5.082 3.177c-1.2.75-2.71-.322-2.396-1.702l.127-.559a52.2 52.2 0 0 1 7.075-16.784"
      opacity={0.28}
    />{" "}
    <path d="M19.533 20.276a.591.591 0 0 1-.89.632l-5.084-3.177a2.94 2.94 0 0 0-3.12 0l-5.082 3.177a.591.591 0 0 1-.89-.632" />
  </Svg>
);

export default Pinavigationhorizontalduosolid;
