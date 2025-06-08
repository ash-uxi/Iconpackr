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
 * Pigitfork02contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitfork02contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git fork02 icon",
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
      <path d="M9 5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M21 5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9 18.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    </g>
    <path d="M6 15.5v-7m0 7a3 3 0 1 0 .245.01M6 15.5q.124 0 .245.01M6 8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m11.875-.003c-.154.605-.258.962-.409 1.269a4 4 0 0 1-2.746 2.144c-.417.09-.892.09-1.843.09h-.922c-1.435 0-2.153 0-2.787.219a4 4 0 0 0-1.495.923c-.475.466-.795 1.102-1.428 2.368m11.63-7.013q.062.003.125.003a3 3 0 1 0-.125-.003" />
  </Svg>
);

export default Pigitfork02contrast;
