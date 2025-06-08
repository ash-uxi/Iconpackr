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
 * Picryptocurrencyusdtduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picryptocurrencyusdtduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "crypto currency usdt icon",
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
    <path d="M13 14.986a35 35 0 0 1-2 0V19a1 1 0 1 0 2 0z" fill="none" />
    <path
      d="M22 11.5c0 1.38-5.03 2.5-10 2.5S2 12.88 2 11.5 7.03 9 12 9s10 1.12 10 2.5"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M5 4a1 1 0 0 0 0 2h6v5a1 1 0 1 0 2 0V6h6a1 1 0 1 0 0-2z"
      fill="none"
    />
  </Svg>
);

export default Picryptocurrencyusdtduostroke;
