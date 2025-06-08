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
 * Pigitbranchcancelduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitbranchcancelduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git branch cancel icon",
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
      d="M16 21.3L18.4 18.9M18.4 18.9L20.8 16.5M18.4 18.9L16 16.5M18.4 18.9L20.8 21.3M6 15.5C4.34315 15.5 3 16.8431 3 18.5C3 20.1569 4.34315 21.5 6 21.5C7.65685 21.5 9 20.1569 9 18.5C9 16.8431 7.65685 15.5 6 15.5ZM21 5.5C21 7.15685 19.6569 8.5 18 8.5C16.3431 8.5 15 7.15685 15 5.5C15 3.84315 16.3431 2.5 18 2.5C19.6569 2.5 21 3.84315 21 5.5Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M6 15.5V14.5M6 14.5V3M6 14.5C6 9.52944 10.0294 5.5 15 5.5"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pigitbranchcancelduostroke;
