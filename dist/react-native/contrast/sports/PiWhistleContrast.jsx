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
 * Piwhistlecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwhistlecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "whistle icon",
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
    <path d="M11 10h9a1 1 0 0 1 1 1v1.687a1 1 0 0 1-.796.979l-6.23 1.298q.026.264.026.536A5.5 5.5 0 1 1 8.5 10zm0 0v2m0-9v3m5-1-1 1M6 5l1 1" />
    <path
      fill={color}
      d="M21 11v1.687a1 1 0 0 1-.796.979l-6.23 1.298q.026.264.026.536A5.5 5.5 0 1 1 8.5 10H20a1 1 0 0 1 1 1"
      opacity={0.28}
    />
  </Svg>
);

export default Piwhistlecontrast;
