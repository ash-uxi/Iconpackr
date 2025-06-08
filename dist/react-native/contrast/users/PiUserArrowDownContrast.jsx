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
 * Piuserarrowdowncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserarrowdowncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user arrow down icon",
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
      <path d="M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7 15a4 4 0 0 0-4 4 2 2 0 0 0 2 2h8.309v-.485A3 3 0 0 1 16 16.188v-1.062A4 4 0 0 0 15 15z" />
    </g>
    <path d="M15 15H7a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7.431M22 19.189a15 15 0 0 1-2.556 2.654A.7.7 0 0 1 19 22m-3-2.811c.74.986 1.599 1.878 2.556 2.654.13.105.287.157.444.157m0 0v-7m-4-8a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
  </Svg>
);

export default Piuserarrowdowncontrast;
