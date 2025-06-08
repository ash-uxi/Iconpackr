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
 * Piprescriptionrxstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piprescriptionrxstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "prescription rx icon",
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
      d="M4.00342 9V3H10.0034C11.6603 3 13.0034 4.34315 13.0034 6C13.0034 7.65685 11.6603 9 10.0034 9H8.00342M4.00342 9V15M4.00342 9H8.00342M12.0034 21L16.0034 17M16.0034 17L20.0034 13M16.0034 17L20.0034 21M16.0034 17L8.00342 9"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piprescriptionrxstroke;
