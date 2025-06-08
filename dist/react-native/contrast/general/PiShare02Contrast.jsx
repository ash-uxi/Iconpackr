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
 * Pishare02contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pishare02contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "share02 icon",
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
      d="M11.409 3.216A20.3 20.3 0 0 0 8 6.856c1.326-.131 2.665-.337 4-.337s2.674.206 4 .337a20.3 20.3 0 0 0-3.409-3.64.92.92 0 0 0-1.182 0"
      opacity={0.28}
    />
    <path d="M21 13v1.6c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6V13m9-6.481V16m0-9.481c-1.335 0-2.674.206-4 .337a20.3 20.3 0 0 1 3.409-3.64.92.92 0 0 1 1.182 0A20.3 20.3 0 0 1 16 6.856c-1.326-.131-2.665-.337-4-.337" />
  </Svg>
);

export default Pishare02contrast;
