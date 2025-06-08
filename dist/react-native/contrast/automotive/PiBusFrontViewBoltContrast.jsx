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
 * Pibusfrontviewboltcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibusfrontviewboltcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bus front view bolt icon",
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
    <path d="M12 8.5 9.846 12h4.308L12 15.5M4 9H2.5a.5.5 0 0 1-.5-.5V8a3 3 0 0 1 2.5-2.958M20 9h1.5a.5.5 0 0 0 .5-.5V8a3 3 0 0 0-2.5-2.958" />
    <path
      fill={color}
      d="M4 9.333c0-2.177 0-3.266.413-4.102A4 4 0 0 1 6.23 3.413C7.067 3 8.156 3 10.333 3h3.334c2.177 0 3.266 0 4.102.413a4 4 0 0 1 1.819 1.818C20 6.067 20 7.156 20 9.333V20.5a1.5 1.5 0 0 1-3 0V19H7v1.5a1.5 1.5 0 0 1-3 0z"
      opacity={0.28}
    />
    <path d="M4 9.333c0-2.177 0-3.266.413-4.102A4 4 0 0 1 6.23 3.413C7.067 3 8.156 3 10.333 3h3.334c2.177 0 3.266 0 4.102.413a4 4 0 0 1 1.819 1.818C20 6.067 20 7.156 20 9.333V20.5a1.5 1.5 0 0 1-3 0V19H7v1.5a1.5 1.5 0 0 1-3 0z" />
  </Svg>
);

export default Pibusfrontviewboltcontrast;
