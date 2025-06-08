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
 * Piphoneduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piphoneduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "phone icon",
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
      d="M12 19H12.01"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M12.6 2H11.4C9.15979 2 8.03968 2 7.18404 2.43597C6.43139 2.81947 5.81947 3.43139 5.43597 4.18404C5 5.03968 5 6.15979 5 8.4V15.6C5 17.8402 5 18.9603 5.43597 19.816C5.81947 20.5686 6.43139 21.1805 7.18404 21.564C8.03968 22 9.15979 22 11.4 22H12.6C14.8402 22 15.9603 22 16.816 21.564C17.5686 21.1805 18.1805 20.5686 18.564 19.816C19 18.9603 19 17.8402 19 15.6V8.4C19 6.15979 19 5.03968 18.564 4.18404C18.1805 3.43139 17.5686 2.81947 16.816 2.43597C15.9603 2 14.8402 2 12.6 2Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piphoneduostroke;
