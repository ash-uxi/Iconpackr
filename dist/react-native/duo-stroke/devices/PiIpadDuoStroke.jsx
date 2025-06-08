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
 * Piipadduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piipadduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ipad icon",
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
    <path d="M10 19H14" stroke={color || "#000"} strokeWidth="2" fill="none" />
    <path
      d="M10 2H9.4C7.15979 2 6.03968 2 5.18404 2.43597C4.43139 2.81947 3.81947 3.43139 3.43597 4.18404C3 5.03968 3 6.15979 3 8.4V15.6C3 17.8402 3 18.9603 3.43597 19.816C3.81947 20.5686 4.43139 21.1805 5.18404 21.564C6.03968 22 7.15979 22 9.4 22H14.6C16.8402 22 17.9603 22 18.816 21.564C19.5686 21.1805 20.1805 20.5686 20.564 19.816C21 18.9603 21 17.8402 21 15.6V8.4C21 6.15979 21 5.03968 20.564 4.18404C20.1805 3.43139 19.5686 2.81947 18.816 2.43597C17.9603 2 16.8402 2 14.6 2H14M10 2H14M10 2V3H14V2"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piipadduostroke;
