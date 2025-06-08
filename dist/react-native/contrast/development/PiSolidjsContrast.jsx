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
 * Pisolidjscontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisolidjscontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "solidjs icon",
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
    <g fill={color} opacity={0.28}>
      <path d="m4 15.963 11.659-3.124c6.262-1.678 6.831 6.443.553 8.13C11.245 22.162 7.364 18.953 4 15.964M20.74 8.261 9.083 11.385c-6.262 1.678-6.832-6.443-.553-8.13 4.967-1.192 8.847 2.017 12.212 5.006" />
    </g>
    <path d="M20.74 8.261 9.083 11.385c-6.262 1.678-6.832-6.443-.553-8.13 4.967-1.192 8.847 2.017 12.212 5.006M4 15.963l11.659-3.124c6.262-1.678 6.831 6.443.553 8.13C11.245 22.162 7.364 18.953 4 15.964" />
  </Svg>
);

export default Pisolidjscontrast;
