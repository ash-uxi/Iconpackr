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
 * Piresolutionqualityhqduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piresolutionqualityhqduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "resolution quality hq icon",
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
    <path d="M6.745 8.544v3.503m0 0h3.504m-3.504 0v3.003m3.504-3.003V8.544m0 3.503v3.003m5.172-.924v1.533m-1.67-5.565a1.752 1.752 0 1 1 3.504 0v2.28a1.752 1.752 0 0 1-3.503 0z" />{" "}
    <path
      fill={color || "#000"}
      d="M7 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5z"
      opacity={0.28}
    />
  </Svg>
);

export default Piresolutionqualityhqduosolid;
