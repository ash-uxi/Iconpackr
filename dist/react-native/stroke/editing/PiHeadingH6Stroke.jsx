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
 * Piheadingh6stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheadingh6stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "heading h6 icon",
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
      d="M4 12H12M4 18V6M12 18V6M16 16C16 17.1046 16.8954 18 18 18H19C20.1046 18 21 17.1046 21 16C21 14.8954 20.1046 14 19 14H18C16.8954 14 16 14.8954 16 16ZM16 16V12C16 10.8954 16.8954 10 18 10H19C19.7403 10 20.3866 10.4022 20.7324 11"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piheadingh6stroke;
