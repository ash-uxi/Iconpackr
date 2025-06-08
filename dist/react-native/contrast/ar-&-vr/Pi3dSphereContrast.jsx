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
 * Pi3dspherecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pi3dspherecontrast = ({
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
      fill={color}
      d="M2.85 12c0-4.568 3.347-8.354 7.723-9.04q.699-.11 1.427-.11A9.15 9.15 0 1 1 2.85 12"
      opacity={0.28}
    />
    <path d="M21.142 12.39q.008-.195.008-.39a9.15 9.15 0 0 0-10.577-9.04m10.569 9.43a9.15 9.15 0 0 1-10.569 8.649m10.569-8.65c-3.803 1.492-8.033 1.885-12.082 1.462m0 0c-2.273-.238-4.376-.745-6.202-1.461m6.202 1.46c.171 2.647.706 5.097 1.513 7.189M9.06 13.851c-.238-3.67.185-7.448 1.513-10.89M2.858 12.39A9 9 0 0 1 2.85 12c0-4.568 3.347-8.354 7.723-9.04m-7.715 9.43a9.15 9.15 0 0 0 7.715 8.649" />
  </Svg>
);

export default Pi3dspherecontrast;
