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
 * Pisolanafmduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisolanafmduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "solana fm icon",
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
      d="M15.5146 12.5C15.0881 15.7993 12.3645 18.3784 8.99998 18.5809M8.48535 11.5C8.92976 8.06212 11.8683 5.40625 15.4272 5.40625"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M18.9876 12.5C18.7271 17.7906 14.3551 22 8.99992 22M5.01221 11.5C5.27272 6.20944 9.64474 2 14.9999 2M8.99992 15C10.6568 15 11.9999 13.6569 11.9999 12C11.9999 10.3431 13.3431 9 14.9999 9"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pisolanafmduostroke;
