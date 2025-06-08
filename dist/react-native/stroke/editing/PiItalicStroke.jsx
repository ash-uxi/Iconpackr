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
 * Piitalicstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piitalicstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "italic icon",
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
      d="M13.5 5L10.5 19M13.5 5H17M13.5 5H10M10.5 19H14M10.5 19H7"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piitalicstroke;
