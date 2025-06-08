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
 * Pipowercircleduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipowercircleduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "power circle icon",
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
      d="M12 7V12M16.0007 9.00039C16.6282 9.83598 17 10.8746 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 10.8746 7.37183 9.83598 7.99934 9.00039"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2.8501 11.9996C2.8501 6.94621 6.94669 2.84961 12.0001 2.84961C17.0535 2.84961 21.1501 6.94621 21.1501 11.9996C21.1501 17.053 17.0535 21.1496 12.0001 21.1496C6.94669 21.1496 2.8501 17.053 2.8501 11.9996Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pipowercircleduostroke;
