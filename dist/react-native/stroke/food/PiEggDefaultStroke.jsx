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
 * Pieggdefaultstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pieggdefaultstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "egg default icon",
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
      d="M19.3891 14.1111C19.3891 18.1919 16.081 21.5 12.0002 21.5C7.91945 21.5 4.61133 18.1919 4.61133 14.1111C4.61133 10.0303 7.91945 2.5 12.0002 2.5C16.081 2.5 19.3891 10.0303 19.3891 14.1111Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pieggdefaultstroke;
