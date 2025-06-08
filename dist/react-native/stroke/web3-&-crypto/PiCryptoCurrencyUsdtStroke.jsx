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
 * Picryptocurrencyusdtstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picryptocurrencyusdtstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "crypto currency usdt icon",
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
      d="M5 5H12M12 5H19M12 5V11M12 14V19M12 14C16.9706 14 22 12.8807 22 11.5C22 10.1193 16.9706 9 12 9C7.02944 9 2 10.1193 2 11.5C2 12.8807 7.02944 14 12 14Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picryptocurrencyusdtstroke;
