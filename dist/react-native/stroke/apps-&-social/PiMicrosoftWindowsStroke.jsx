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
 * Pimicrosoftwindowsstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimicrosoftwindowsstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "microsoft windows icon",
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
      d="M11 4.87682V18.6546M21 11.7657L3 11.7657M4.77913 17.9634L18.7791 19.5189C19.9639 19.6506 21 18.7232 21 17.5312V6.00024C21 4.80821 19.9639 3.88083 18.7791 4.01247L4.77914 5.56803C3.76627 5.68057 3 6.53669 3 7.55579V15.9756C3 16.9947 3.76627 17.8508 4.77913 17.9634Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimicrosoftwindowsstroke;
