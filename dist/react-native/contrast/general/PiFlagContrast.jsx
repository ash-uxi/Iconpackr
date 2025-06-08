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
 * Piflagcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piflagcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "flag icon",
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
      d="M19 4.485c0-.89-1.666-.067-2.045.05A6.03 6.03 0 0 1 12 3.904a6.03 6.03 0 0 0-4.955-.633L5.6 3.717A.85.85 0 0 0 5 4.53v8.927c0 .756 1.138.173 1.472.06a6.6 6.6 0 0 1 5.377.523 6.6 6.6 0 0 0 5.218.573l1.309-.405A.89.89 0 0 0 19 13.36z"
      opacity={0.28}
    />
    <path d="M5 4.53v8.926M5 4.53a.85.85 0 0 1 .599-.812l1.446-.447A6.03 6.03 0 0 1 12 3.903a6.03 6.03 0 0 0 4.955.633c.379-.118 2.045-.94 2.045-.05v8.874a.89.89 0 0 1-.624.847l-1.31.405a6.6 6.6 0 0 1-5.217-.573 6.6 6.6 0 0 0-5.377-.522c-.334.112-1.472.695-1.472-.06m0-8.928V3m0 10.456V21" />
  </Svg>
);

export default Piflagcontrast;
