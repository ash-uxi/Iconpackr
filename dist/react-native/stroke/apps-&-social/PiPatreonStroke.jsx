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
 * Pipatreonstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipatreonstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "patreon icon",
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
      d="M21.1307 8.00805C21.1274 5.45472 19.1382 3.36138 16.8049 2.60638C13.9065 1.66888 10.0849 1.80472 7.3182 3.10972C3.96404 4.69222 2.9107 8.15888 2.87154 11.6164C2.83904 14.4589 3.1232 21.9464 7.3457 21.9997C10.4832 22.0389 10.9507 17.9964 12.4024 16.0489C13.4357 14.6639 14.7657 14.2722 16.4032 13.8672C19.2165 13.1706 21.1349 10.9497 21.1307 8.00805Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipatreonstroke;
