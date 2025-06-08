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
 * Pialignleftstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignleftstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align left icon",
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
      d="M12.0309 7.91667C10.5767 8.97531 9.2706 10.212 8.14485 11.5955C8.04828 11.7142 8 11.8571 8 12M12.0309 16.0833C10.5767 15.0247 9.2706 13.788 8.14485 12.4045C8.04828 12.2858 8 12.1429 8 12M8 12L20 12M4 5V19"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pialignleftstroke;
