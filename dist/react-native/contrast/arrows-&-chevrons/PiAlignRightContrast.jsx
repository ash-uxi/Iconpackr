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
 * Pialignrightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignrightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align right icon",
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
    <path d="M12.134 12H4m8.134 0a51 51 0 0 1-.165 4.083 20.8 20.8 0 0 0 3.886-3.678.64.64 0 0 0 0-.81 20.8 20.8 0 0 0-3.886-3.678q.165 2.038.165 4.083M20 19V5" />
    <path
      fill={color}
      d="M15.855 12.404a20.8 20.8 0 0 1-3.886 3.68c.22-2.718.22-5.45 0-8.167a20.8 20.8 0 0 1 3.886 3.678.64.64 0 0 1 0 .81"
      opacity={0.28}
    />
  </Svg>
);

export default Pialignrightcontrast;
