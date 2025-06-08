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
 * Pichecktickdoublestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichecktickdoublestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "check tick double icon",
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
      d="M2.60547 11.7812L7.1292 17.0048L7.50331 16.3507C7.9736 15.5283 8.48622 14.7335 9.03848 13.9692C10.8417 11.4735 13.0675 9.30272 15.6219 7.55842L16.4468 6.99512M21.553 7.60879L20.6832 8.09987C17.1647 10.0862 14.143 12.8455 11.846 16.1695L11.4176 16.7895L11.1202 16.437"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pichecktickdoublestroke;
