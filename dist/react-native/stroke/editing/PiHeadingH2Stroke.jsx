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
 * Piheadingh2stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheadingh2stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "heading h2 icon",
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
      d="M4 12H12M4 18V6M12 18V6M21.5679 18H16V17.1793C17.4481 16.1649 18.932 15.2073 20.1189 13.8779C20.9116 12.9899 20.9993 11.6609 20.145 10.7684C19.451 10.0435 18.251 9.80588 17.3259 10.1656C16.7013 10.4086 16.3457 10.8952 16 11.4341"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piheadingh2stroke;
