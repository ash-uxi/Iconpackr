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
 * Piuserbotduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserbotduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user bot icon",
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
      d="M12 5H10C8.89543 5 8 5.89543 8 7V9C8 10.1046 8.89543 11 10 11H14C15.1046 11 16 10.1046 16 9V7C16 5.89543 15.1046 5 14 5H12ZM12 5V3"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8 15C5.79086 15 4 16.7909 4 19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19C20 16.7909 18.2091 15 16 15H8Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piuserbotduostroke;
