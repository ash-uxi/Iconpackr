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
 * Piprojectorcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piprojectorcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "projector icon",
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
      <path d="M2.152 10.235C2 10.602 2 11.068 2 12s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 15 4.068 15 5 15h4.354A4 4 0 0 1 8 12a4 4 0 0 1 1.354-3H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083M21.848 13.765C22 13.398 22 12.932 22 12s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C20.398 9 19.932 9 19 9h-4.354A4 4 0 0 1 16 12a4 4 0 0 1-1.354 3H19c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083" />
    </g>
    <path d="M5 15c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 13.398 2 12.932 2 12s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 9 4.068 9 5 9h4.354M5 15h4.354M5 15v1m14-1c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 13.398 22 12.932 22 12s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C20.398 9 19.932 9 19 9h-4.354M19 15h-4.354M19 15v1m-4.354-7A3.99 3.99 0 0 0 12 8c-1.014 0-1.94.378-2.646 1m5.292 0A4 4 0 0 1 16 12a4 4 0 0 1-1.354 3m0 0c-.705.622-1.632 1-2.646 1a3.99 3.99 0 0 1-2.646-1m0 0A4 4 0 0 1 8 12a4 4 0 0 1 1.354-3m9.656 3H19" />
  </Svg>
);

export default Piprojectorcontrast;
