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
 * Picurrencysignyuanstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picurrencysignyuanstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "currency sign yuan icon",
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
      d="M5 3L12 11.1M12 11.1L19 3M12 11.1V12M12 12V16M12 12H6M12 12H18M12 16V21M12 16H6M12 16H18"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picurrencysignyuanstroke;
