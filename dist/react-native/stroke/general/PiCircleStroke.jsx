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
 * Picirclestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picirclestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "circle icon",
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
      d="M2.8501 11.9996C2.8501 17.053 6.94669 21.1496 12.0001 21.1496C17.0535 21.1496 21.1501 17.053 21.1501 11.9996C21.1501 6.9462 17.0535 2.84961 12.0001 2.84961C6.94669 2.84961 2.8501 6.9462 2.8501 11.9996Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picirclestroke;
