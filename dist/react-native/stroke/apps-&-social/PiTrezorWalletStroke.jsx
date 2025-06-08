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
 * Pitrezorwalletstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitrezorwalletstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "trezor wallet icon",
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
      d="M8 9V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V9M6 10.5V17.1004C6 17.6542 6.30508 18.1629 6.79357 18.4237L11.2936 20.8261C11.735 21.0617 12.265 21.0617 12.7064 20.8261L17.2064 18.4237C17.6949 18.1629 18 17.6542 18 17.1004V10.5C18 9.67157 17.3284 9 16.5 9H7.5C6.67157 9 6 9.67157 6 10.5Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitrezorwalletstroke;
