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
 * Piacleafstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piacleafstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ac leaf icon",
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
      d="M18 8H16M14.8021 22L14.8424 21.8903C15.2847 20.6838 16.0952 19.647 17.1592 18.9265M22 12V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V12H22ZM16.6767 16.0715C15.2045 16.9215 14.6523 18.7213 15.2936 19.832C15.9348 20.9427 17.7696 21.3643 19.2418 20.5144C20.714 19.6644 22.2784 16.5397 21.9578 15.9844C21.6372 15.429 18.1489 15.2215 16.6767 16.0715Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piacleafstroke;
