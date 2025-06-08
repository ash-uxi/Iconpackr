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
 * Pitickettokenonestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitickettokenonestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ticket token one icon",
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
      d="M12 15V9.37755C11.3236 9.54318 10.8067 10.0089 10.5 10.6224M12 15H10M12 15H14M2.6 9C2.26863 9 2 8.73137 2 8.4V8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V8.4C22 8.73137 21.7314 9 21.4 9C20.0745 9 19 10.0745 19 11.4V12.6C19 13.9255 20.0745 15 21.4 15C21.7314 15 22 15.2686 22 15.6V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V15.6C2 15.2686 2.26863 15 2.6 15C3.92548 15 5 13.9255 5 12.6V11.4C5 10.0745 3.92548 9 2.6 9Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitickettokenonestroke;
