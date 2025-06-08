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
 * Pigraphtrendlinedownwardduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphtrendlinedownwardduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph trend line downward icon",
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
      d="M21 21H7C4.79086 21 3 19.2091 3 17V3"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M7 9.604L7.61026 11.4348C8.35529 13.6699 11.5295 13.633 12.2224 11.3812C12.8649 9.29297 15.7261 9.05617 16.7032 11.0103L19.166 15.9361M19.166 15.9361C19.2863 15.8757 19.3865 15.7751 19.4454 15.645C19.8807 14.6826 20.196 13.6696 20.3837 12.6289M19.166 15.9361C19.0457 15.9964 18.9052 16.0166 18.7657 15.986C17.734 15.7596 16.7335 15.4068 15.787 14.9352"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigraphtrendlinedownwardduostroke;
