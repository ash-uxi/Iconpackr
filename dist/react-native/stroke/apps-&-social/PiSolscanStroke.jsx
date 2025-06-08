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
 * Pisolscanstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisolscanstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "solscan icon",
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
      d="M19.8917 16.6358C21.8113 13.3687 21.5609 9.1121 18.9649 6.06543C15.6874 2.21898 9.91237 1.75771 6.06592 5.03517C2.21947 8.31262 1.7582 14.0877 5.03566 17.9341C7.63159 20.9808 11.7944 21.9037 15.3247 20.5272M16.0002 12.0002C16.0002 14.2093 14.2093 16.0002 12.0002 16.0002C9.79102 16.0002 8.00016 14.2093 8.00016 12.0002C8.00016 9.79102 9.79102 8.00016 12.0002 8.00016C14.2093 8.00016 16.0002 9.79102 16.0002 12.0002Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pisolscanstroke;
