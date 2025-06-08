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
 * Piprioritycriticalduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piprioritycriticalduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "priority critical icon",
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
      d="M12 3c-.381 0-.79.081-1.157.274-2.107 1.103-4.03 2.362-5.727 3.758A3.02 3.02 0 0 0 4 9.37V20a1 1 0 0 0 1.662.75c1.749-1.545 3.8-2.94 6.108-4.149.04-.02.121-.045.23-.045s.19.025.23.045c2.307 1.208 4.36 2.604 6.108 4.148A1 1 0 0 0 20 20V9.369c0-.893-.398-1.746-1.116-2.337-1.698-1.396-3.62-2.655-5.727-3.758A2.5 2.5 0 0 0 12 3"
      opacity={0.28}
    />{" "}
    <path d="M5.2 8.5c.126-.26.311-.498.55-.695 1.641-1.349 3.505-2.571 5.557-3.645.203-.107.448-.16.693-.16s.49.053.694.16c2.051 1.074 3.915 2.296 5.556 3.645.24.197.424.434.55.695" />
  </Svg>
);

export default Piprioritycriticalduosolid;
