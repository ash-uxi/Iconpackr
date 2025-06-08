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
 * Pigraphtrendlineupwardstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphtrendlineupwardstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph trend line upward icon",
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
      d="M21 21H7C4.79086 21 3 19.2091 3 17V3M7 14L7.61026 12.1692C8.35529 9.93413 11.5295 9.97104 12.2224 12.2228C12.8649 14.311 15.7261 14.5478 16.7032 12.5937L19.166 7.66795M19.166 7.66795C19.2863 7.72831 19.3865 7.82886 19.4454 7.95903C19.8807 8.92142 20.196 9.93437 20.3837 10.9751M19.166 7.66795C19.0457 7.60758 18.9052 7.58742 18.7657 7.61803C17.734 7.8444 16.7335 8.19719 15.787 8.66882"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigraphtrendlineupwardstroke;
