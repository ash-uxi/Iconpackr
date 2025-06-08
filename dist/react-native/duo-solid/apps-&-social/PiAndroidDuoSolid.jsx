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
 * Piandroidduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piandroidduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "android icon",
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
    <path d="M17 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />{" "}
    <path
      fill={color || "#000"}
      d="M4.866 4.5a1 1 0 0 0-1.732 1l1.399 2.423A10.97 10.97 0 0 0 1 16v1.982C1 18.544 1.456 19 2.018 19h19.964c.562 0 1.018-.456 1.018-1.018V16c0-3.193-1.362-6.069-3.533-8.077L20.866 5.5a1 1 0 1 0-1.732-1l-1.267 2.194A10.95 10.95 0 0 0 12 5c-2.156 0-4.169.621-5.867 1.694z"
      opacity={0.28}
    />{" "}
    <path d="M9 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </Svg>
);

export default Piandroidduosolid;
