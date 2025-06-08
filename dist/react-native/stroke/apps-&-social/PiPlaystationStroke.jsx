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
 * Piplaystationstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piplaystationstroke = ({
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
      d="M8.04029 13.872L3.8404 15.775C-0.211804 17.3258 3.14503 21.098 7.00493 19.8503L8.04029 19.4288M13.9984 16.1633L16.9493 15.0843C20.6353 13.7812 24.3106 17.6919 20.1692 19.1595L13.9984 21.1264M15 10.8415L16.5768 11.3582C21.1305 12.6043 21.2536 5.18607 16.5768 3.78303L11 2V22"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piplaystationstroke;
