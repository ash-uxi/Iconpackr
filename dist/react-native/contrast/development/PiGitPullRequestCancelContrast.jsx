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
 * Pigitpullrequestcancelcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitpullrequestcancelcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git pull request cancel icon",
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
      <path d="M21 18a3 3 0 1 0-6 0 3 3 0 0 0 6 0M9 6a3 3 0 1 0-6 0 3 3 0 0 0 6 0" />
    </g>
    <path d="M6 9v12M6 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6m12 6v-2m0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-2.5-6.7 2.4-2.4m0 0 2.4-2.4m-2.4 2.4-2.4-2.4m2.4 2.4 2.4 2.4" />
  </Svg>
);

export default Pigitpullrequestcancelcontrast;
