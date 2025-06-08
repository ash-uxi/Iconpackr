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
 * Pinavigationhorizontalcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinavigationhorizontalcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "navigation horizontal icon",
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
      d="m10.44 17.732-5.083 3.176a.592.592 0 0 1-.89-.632l.127-.559a51.2 51.2 0 0 1 6.939-16.463.556.556 0 0 1 .934 0 51.2 51.2 0 0 1 6.939 16.463l.127.559a.591.591 0 0 1-.89.632l-5.084-3.177a2.94 2.94 0 0 0-3.12 0"
      opacity={0.28}
    />
    <path d="m10.44 17.732-5.083 3.176a.592.592 0 0 1-.89-.632l.127-.559a51.2 51.2 0 0 1 6.939-16.463.556.556 0 0 1 .934 0 51.2 51.2 0 0 1 6.939 16.463l.127.559a.591.591 0 0 1-.89.632l-5.084-3.177a2.94 2.94 0 0 0-3.12 0" />
  </Svg>
);

export default Pinavigationhorizontalcontrast;
