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
 * Pifontaaduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifontaaduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "font aa icon",
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
      d="M2 19L6.35782 6.15727C6.60568 5.46327 7.26306 5 8 5C8.75748 5 9.42832 5.48902 9.66011 6.21016L14 19M4.03593 13H11.9641"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M22 12V18M22 15C22 16.6569 20.6569 18 19 18C17.3431 18 16 16.6569 16 15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifontaaduostroke;
