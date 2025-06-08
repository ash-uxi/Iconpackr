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
 * Piarrowrightupduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightupduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right up icon",
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
      d="M18.1369 5.86328L5.40894 18.5912"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M18.2568 14.2283C18.6441 11.6411 18.695 9.02026 18.4089 6.43139C18.3844 6.20931 18.2853 6.01146 18.1368 5.86299C17.9884 5.71452 17.7905 5.61544 17.5684 5.5909C14.9796 5.30481 12.3588 5.35568 9.77148 5.74306"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowrightupduostroke;
