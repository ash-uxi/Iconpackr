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
 * Picoinbasestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picoinbasestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "coinbase icon",
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
      d="M8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C13.479 15.75 14.758 14.8938 15.3684 13.65H20.8491C20.0741 17.8325 16.407 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.407 3 20.0741 6.16747 20.8491 10.35H15.3684C14.758 9.10621 13.479 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picoinbasestroke;
