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
 * Piheadingh5stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheadingh5stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "heading h5 icon",
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
      d="M4 12H12M4 18V6M12 18V6M20.5 10H17.5C16.6716 10 16 10.6716 16 11.5V14H19C20.1046 14 21 14.8954 21 16C21 17.1046 20.1046 18 19 18H16"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piheadingh5stroke;
