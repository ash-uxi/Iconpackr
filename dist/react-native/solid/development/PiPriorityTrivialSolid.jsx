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
 * Piprioritytrivialsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piprioritytrivialsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "priority trivial icon",
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
      d="M12 21C11.619 21 11.2105 20.9187 10.8429 20.7263C8.73559 19.6234 6.81373 18.3636 5.11567 16.9677C4.39764 16.3775 4 15.5243 4 14.6311V4.00002C4 3.60677 4.23048 3.25003 4.58897 3.0884C4.94746 2.92676 5.3674 2.99024 5.66211 3.25061C7.41051 4.79532 9.4625 6.19095 11.7703 7.39875C11.8097 7.41935 11.8911 7.44446 12 7.44446C12.1089 7.44446 12.1903 7.41935 12.2297 7.39875C14.5375 6.19095 16.5895 4.79532 18.3379 3.2506C18.6326 2.99024 19.0525 2.92676 19.411 3.0884C19.7695 3.25003 20 3.60677 20 4.00002L20 14.6311C20 15.5243 19.6024 16.3775 18.8843 16.9677C17.1863 18.3636 15.2644 19.6234 13.1571 20.7263C12.7895 20.9187 12.381 21 12 21Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piprioritytrivialsolid;
