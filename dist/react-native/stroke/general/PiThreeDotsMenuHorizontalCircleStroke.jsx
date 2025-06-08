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
 * Pithreedotsmenuhorizontalcirclestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pithreedotsmenuhorizontalcirclestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "three dots menu horizontal circle icon",
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
      d="M8 11.9996H8.01M12 11.9996H12.01M16 11.9996H16.01M12.0001 2.84961C17.0535 2.84961 21.1501 6.9462 21.1501 11.9996C21.1501 17.053 17.0535 21.1496 12.0001 21.1496C6.94669 21.1496 2.8501 17.053 2.8501 11.9996C2.8501 6.9462 6.94669 2.84961 12.0001 2.84961Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pithreedotsmenuhorizontalcirclestroke;
