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
 * Pi3dsphereduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pi3dsphereduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "3d sphere icon",
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
      d="M12 1.85C6.406 1.85 1.85 6.393 1.85 12c0 5.602 4.556 10.15 10.15 10.15 5.606 0 10.15-4.55 10.15-10.15 0-5.606-4.544-10.15-10.15-10.15"
      opacity={0.28}
    />{" "}
    <path d="M21.142 12.39c-3.803 1.492-8.033 1.884-12.082 1.461m0 0c-2.273-.237-4.376-.745-6.202-1.46m6.202 1.46c.171 2.647.706 5.097 1.513 7.188M9.06 13.851c-.238-3.67.185-7.448 1.513-10.89" />
  </Svg>
);

export default Pi3dsphereduosolid;
