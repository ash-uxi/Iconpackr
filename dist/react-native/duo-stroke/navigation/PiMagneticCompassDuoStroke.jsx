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
 * Pimagneticcompassduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimagneticcompassduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "magnetic compass icon",
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
      d="M11.9996 21.15C17.053 21.15 21.1496 17.0534 21.1496 12C21.1496 6.94657 17.053 2.84998 11.9996 2.84998C6.9462 2.84998 2.84961 6.94657 2.84961 12C2.84961 17.0534 6.9462 21.15 11.9996 21.15Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9.58714 15.4978C12.7627 15.2928 15.2928 12.7627 15.4978 9.58714C15.5375 8.97223 15.0278 8.46247 14.4129 8.50217C11.2373 8.70724 8.70724 11.2373 8.50217 14.4129C8.46247 15.0278 8.97223 15.5375 9.58714 15.4978Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimagneticcompassduostroke;
