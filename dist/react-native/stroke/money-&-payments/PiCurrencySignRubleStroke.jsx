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
 * Picurrencysignrublestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picurrencysignrublestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "currency sign ruble icon",
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
      d="M8 12H14C16.2091 12 18 10.2091 18 8C18 5.79086 16.2091 4 14 4H10.8571C10.0592 4 9.66019 4 9.33944 4.11223C8.76495 4.31326 8.31326 4.76495 8.11223 5.33944C8 5.66019 8 6.05917 8 6.85714V12ZM8 12L5 12M8 12V16M8 21V16M5 16H8M15 16H8"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picurrencysignrublestroke;
