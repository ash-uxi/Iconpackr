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
 * Piarrowbigdownleftstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigdownleftstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big down left icon",
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
      d="M18.7635 7.21659L16.7836 5.23669C16.3876 4.84067 16.1896 4.64266 15.9613 4.56847C15.7604 4.50322 15.5441 4.50322 15.3432 4.56848C15.1149 4.64266 14.9169 4.84067 14.5209 5.23669L7.50406 12.2535C6.60626 11.2624 5.74081 10.2412 4.90926 9.19146C4.45732 12.21 4.39797 15.2676 4.73174 18.2879C4.76037 18.547 4.87597 18.7778 5.04918 18.951C5.22239 19.1243 5.45322 19.2399 5.71231 19.2685C8.73266 19.6023 11.7903 19.5429 14.8088 19.091C13.7591 18.2594 12.7379 17.394 11.7467 16.4962L18.7635 9.47933C19.1595 9.08331 19.3576 8.8853 19.4317 8.65698C19.497 8.45613 19.497 8.23978 19.4317 8.03894C19.3576 7.81061 19.1595 7.6126 18.7635 7.21659Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowbigdownleftstroke;
