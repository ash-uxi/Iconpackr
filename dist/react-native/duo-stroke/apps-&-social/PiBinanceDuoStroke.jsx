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
 * Pibinanceduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibinanceduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "binance icon",
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
      d="M3.41111 13.7175L3.06995 13.3764C2.30969 12.6161 2.30969 11.3835 3.06995 10.6232L3.41111 10.2821M20.5884 10.2821L20.9296 10.6232C21.6898 11.3835 21.6898 12.6161 20.9296 13.3764L20.5884 13.7175M17.1529 17.153L13.6192 20.6867C12.7248 21.5811 11.2747 21.5811 10.3803 20.6867L6.84657 17.153M17.1529 6.8466L13.6192 3.3129C12.7248 2.41848 11.2747 2.41849 10.3803 3.31291L6.84657 6.8466"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9.37428 12.8097C8.927 12.3625 8.927 11.6373 9.37428 11.1901L11.1892 9.3754C11.6365 8.92823 12.3615 8.92826 12.8087 9.37545L14.6234 11.1902C15.0706 11.6374 15.0706 12.3625 14.6234 12.8097L12.8087 14.6244C12.3615 15.0716 11.6365 15.0716 11.1892 14.6244L9.37428 12.8097Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibinanceduostroke;
