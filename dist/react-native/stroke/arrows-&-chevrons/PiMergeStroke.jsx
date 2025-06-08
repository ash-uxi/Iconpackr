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
 * Pimergestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimergestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "merge icon",
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
      d="M16 8.03089C14.963 6.57669 13.7515 5.2706 12.3962 4.14485C12.28 4.04828 12.14 4 12 4M8 8.03089C9.03704 6.57669 10.2485 5.2706 11.6038 4.14485C11.72 4.04828 11.86 4 12 4M12 4V13L6 20M18 20L14.5714 16"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimergestroke;
