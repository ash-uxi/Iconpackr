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
 * Pipowerdefaultstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipowerdefaultstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "power default icon",
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
      d="M12.0001 8V2M7.55567 4C4.74888 5.56266 2.8501 8.55959 2.8501 12C2.8501 17.0534 6.94669 21.15 12.0001 21.15C17.0535 21.15 21.1501 17.0534 21.1501 12C21.1501 8.55959 19.2513 5.56266 16.4445 4"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipowerdefaultstroke;
