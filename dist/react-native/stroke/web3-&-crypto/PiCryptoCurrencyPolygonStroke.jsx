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
 * Picryptocurrencypolygonstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picryptocurrencypolygonstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "crypto currency polygon icon",
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
      d="M12 7.48718V6.66667L7.5 4L3 6.66667V12L7.5 14.6667L16.5 9.33333L21 12V17.3333L16.5 20L12 17.3333V16.4615"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picryptocurrencypolygonstroke;
