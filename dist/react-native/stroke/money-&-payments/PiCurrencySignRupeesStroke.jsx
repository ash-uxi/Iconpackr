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
 * Picurrencysignrupeesstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picurrencysignrupeesstroke = ({
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
      d="M5 4H11.0208M11.0208 4H19M11.0208 4C13.7741 4 16.0093 6.2259 16.0207 8.97917L16.0208 9M15 21L5.5 14H11.0208C13.7834 14 16.021 11.76 16.0208 9M16.0208 9H5M16.0208 9H19"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picurrencysignrupeesstroke;
