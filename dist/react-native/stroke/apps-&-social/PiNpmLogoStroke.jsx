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
 * Pinpmlogostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinpmlogostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "npm logo icon",
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
      d="M7 8H2C1.44772 8 1 8.44772 1 9V14C1 14.5523 1.44772 15 2 15H4M7 8H14M7 8V15M14 8H22C22.5523 8 23 8.44772 23 9V14C23 14.5523 22.5523 15 22 15H20M14 8V15M20 15H17M20 15V12M17 15H14M17 15V12M14 15H11V17H7V15M7 15H4M4 15V12M11 11V12"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pinpmlogostroke;
