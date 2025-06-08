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
 * Picryptocurrencyeurcduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picryptocurrencyeurcduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "crypto currency eurc icon",
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
      d="M14.9163 7.78418C14.2077 7.28988 13.3458 7 12.4163 7C10.1357 7 8.30083 8.77253 8.05395 11M14.9163 16.2158C14.2077 16.7101 13.3458 17 12.4163 17C10.4804 17 8.83819 15.7426 8.26176 14M8.26176 14H7M8.26176 14H11M8.26176 14C7.94793 13.0513 7.94516 11.9816 8.05395 11M7 11H8.05395M8.05395 11H12"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8.49963 20.4565C5.1828 19.0822 2.84961 15.8134 2.84961 11.9997C2.84961 8.186 5.1828 4.91723 8.49963 3.54297M15.4996 3.54297C18.8164 4.91723 21.1496 8.186 21.1496 11.9997C21.1496 15.8134 18.8164 19.0822 15.4996 20.4565"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Picryptocurrencyeurcduostroke;
