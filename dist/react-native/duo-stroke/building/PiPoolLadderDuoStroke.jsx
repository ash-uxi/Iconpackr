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
 * Pipoolladderduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipoolladderduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pool ladder icon",
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
      d="M16 17.1242V6C16 4.89543 16.8954 4 18 4C19.1046 4 20 4.89543 20 6V6.2"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2 20.4149L4.5494 19.3952C6.09919 18.7753 7.85014 18.8917 9.30598 19.7082C10.981 20.6477 13.0292 20.6489 14.703 19.7072C16.1554 18.8901 17.8998 18.7749 19.4471 19.3938L22 20.4149"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path d="M6 10H16" stroke={color || "#000"} strokeWidth="2" fill="none" />
    <path d="M6 15H16" stroke={color || "#000"} strokeWidth="2" fill="none" />
    <path
      d="M6 17.0173V6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6V6.2"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipoolladderduostroke;
