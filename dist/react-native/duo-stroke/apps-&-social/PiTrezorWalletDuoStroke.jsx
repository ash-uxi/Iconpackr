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
 * Pitrezorwalletduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitrezorwalletduostroke = ({
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
      d="M6 17.1v-6.6A1.5 1.5 0 0 1 7.5 9h9a1.5 1.5 0 0 1 1.5 1.5v6.6a1.5 1.5 0 0 1-.794 1.324l-4.5 2.402a1.5 1.5 0 0 1-1.412 0l-4.5-2.402A1.5 1.5 0 0 1 6 17.1"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9 7a3 3 0 1 1 6 0v1h1.5q.257 0 .5.05V7A5 5 0 0 0 7 7v1.05Q7.243 8 7.5 8H9z"
      fill="none"
    />
  </Svg>
);

export default Pitrezorwalletduostroke;
