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
 * Picircledottedstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picircledottedstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "circle dotted icon",
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
      d="M7.4251 4.07909V4.08925M4.08026 7.42207V7.43223M2.8501 11.9945V12.0047M4.08026 16.567V16.5771M7.4251 19.91V19.9201M12.0001 21.1394V21.1496M16.5751 19.91V19.9201M19.9199 16.567V16.5771M21.1501 11.9945V12.0047M19.9199 7.42207V7.43223M16.5751 4.07909V4.08925M12.0001 2.84961V2.85977"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picircledottedstroke;
