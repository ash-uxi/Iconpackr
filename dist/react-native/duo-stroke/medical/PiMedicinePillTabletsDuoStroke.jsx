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
 * Pimedicinepilltabletsduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimedicinepilltabletsduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "medicine pill tablets icon",
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
    <g opacity={0.28} fill="none">
      <path
        d="M12.3059 15.2829C11.3569 17.8761 12.6897 20.7477 15.2829 21.6968C17.8761 22.6459 20.7477 21.313 21.6968 18.7198C22.6459 16.1266 21.3131 13.255 18.7199 12.306C16.1267 11.3569 13.255 12.6897 12.3059 15.2829Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M2.11361 8.05607C2.69628 10.7553 5.35687 12.4711 8.05612 11.8885C10.7554 11.3058 12.4712 8.64527 11.8885 5.94602C11.3059 3.24677 8.64533 1.53094 5.94608 2.11362C3.24683 2.69629 1.53094 5.35682 2.11361 8.05607Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
    </g>
    <path
      d="M12.3061 15.2829L21.697 18.7199M2.11377 8.0561L11.8887 5.94604"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimedicinepilltabletsduostroke;
