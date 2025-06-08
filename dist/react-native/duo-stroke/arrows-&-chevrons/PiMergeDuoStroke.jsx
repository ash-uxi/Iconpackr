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
 * Pimergeduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimergeduostroke = ({
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
      d="M12 4V13L6 20M18 20L14.5714 16"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M16 8.03089C14.963 6.57669 13.7515 5.2706 12.3962 4.14485C12.28 4.04828 12.14 4 12 4C11.86 4 11.72 4.04828 11.6038 4.14485C10.2485 5.2706 9.03704 6.57669 8 8.03089"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimergeduostroke;
