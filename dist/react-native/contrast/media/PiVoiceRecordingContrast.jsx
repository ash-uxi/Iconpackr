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
 * Pivoicerecordingcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivoicerecordingcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "voice recording icon",
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
      <path d="M6 16a4.15 4.15 0 1 0 0-8.3A4.15 4.15 0 0 0 6 16M18 16a4.15 4.15 0 1 0 0-8.3 4.15 4.15 0 0 0 0 8.3" />
    </g>
    <path d="M6 16a4.15 4.15 0 1 0 0-8.3A4.15 4.15 0 0 0 6 16m0 0h12m0 0a4.15 4.15 0 1 0 0-8.3 4.15 4.15 0 0 0 0 8.3" />
  </Svg>
);

export default Pivoicerecordingcontrast;
