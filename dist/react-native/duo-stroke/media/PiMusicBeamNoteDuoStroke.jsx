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
 * Pimusicbeamnoteduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimusicbeamnoteduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "music beam note icon",
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
      d="M16 16C16 14.3431 17.3431 13 19 13C20.6569 13 22 14.3431 22 16C22 17.6569 20.6569 19 19 19C17.3431 19 16 17.6569 16 16Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8 12V7.86311C8 7.04079 8.50333 6.30228 9.2687 6.0016L19.9515 1.80478C20.9356 1.4182 22 2.14366 22 3.20091V6.50002M8 12V19M8 12L22 6.50002M22 6.50002V16"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pimusicbeamnoteduostroke;
