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
 * Piarrowrightdownduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightdownduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right down icon",
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
      d="M18.1369 18.1366L5.40894 5.40869"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M18.2568 9.77173C18.6441 12.359 18.695 14.9798 18.4089 17.5687C18.3844 17.7908 18.2853 17.9886 18.1368 18.1371C17.9884 18.2856 17.7905 18.3846 17.5684 18.4092C14.9796 18.6953 12.3588 18.6444 9.77148 18.257"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowrightdownduostroke;
