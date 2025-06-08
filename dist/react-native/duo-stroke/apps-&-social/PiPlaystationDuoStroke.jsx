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
 * Piplaystationduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piplaystationduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "playstation icon",
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
      d="M15 10.8415L16.5768 11.3582C21.1305 12.6043 21.2536 5.18607 16.5768 3.78303L11 2V22"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8.04029 13.8721L3.8404 15.7751C-0.211804 17.3258 3.14503 21.098 7.00493 19.8504L8.04029 19.4288M13.9984 16.1634L16.9493 15.0843C20.6353 13.7813 24.3106 17.692 20.1692 19.1596L13.9984 21.1265"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piplaystationduostroke;
