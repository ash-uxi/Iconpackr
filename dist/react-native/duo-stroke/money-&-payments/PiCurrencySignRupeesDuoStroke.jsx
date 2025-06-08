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
 * Picurrencysignrupeesduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picurrencysignrupeesduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "currency sign rupees icon",
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
      d="M5 4H11.0208M11.0208 4H19M11.0208 4C13.7741 4 16.0093 6.2259 16.0207 8.97917C16.0323 11.7487 13.7904 14 11.0208 14H5.5L15 21"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5 9H19"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Picurrencysignrupeesduostroke;
