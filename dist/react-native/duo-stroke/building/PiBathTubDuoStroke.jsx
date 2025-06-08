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
 * Pibathtubduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibathtubduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bath tub icon",
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
      d="M17 20L18.0001 21.0002"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M3 11V5C3 3.34315 4.34315 2 6 2C7.65685 2 9 3.34315 9 5V6"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M3 13.4142V15.2C3 16.8802 3 17.7202 3.32698 18.362C3.6146 18.9265 4.07354 19.3854 4.63803 19.673C5.27976 20 6.11984 20 7.8 20H16.2C17.8802 20 18.7202 20 19.362 19.673C19.9265 19.3854 20.3854 18.9265 20.673 18.362C21 17.7202 21 16.8802 21 15.2V13.4142C21 13.0419 21 12.8557 21.0257 12.6778C21.0855 12.2647 21.2476 11.8732 21.4974 11.539C21.6051 11.3949 21.7367 11.2633 22 11H2C2.26328 11.2633 2.39492 11.3949 2.50256 11.539C2.75238 11.8732 2.91454 12.2647 2.97427 12.6778C3 12.8557 3 13.0419 3 13.4142Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path d="M7 6H11" stroke={color || "#000"} strokeWidth="2" fill="none" />
    <path
      d="M7.00002 20.0002L6 21"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pibathtubduostroke;
