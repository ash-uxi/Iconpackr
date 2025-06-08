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
 * Pimaximizelinearrowduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimaximizelinearrowduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "maximize line arrow icon",
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
      d="M19.7142 9.94268C20.0092 8.1811 20.0761 6.40091 19.9138 4.64657C19.8998 4.49608 19.835 4.36296 19.736 4.26398C19.637 4.165 19.5039 4.10016 19.3534 4.08624C17.5991 3.92395 15.8189 3.99085 14.0573 4.28582M4.28582 14.0573C3.99085 15.8189 3.92395 17.5991 4.08624 19.3534C4.10016 19.5039 4.165 19.637 4.26398 19.736C4.36296 19.835 4.49608 19.8998 4.64657 19.9138C6.40091 20.0761 8.1811 20.0092 9.94268 19.7142"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M19.736 4.26416L4.26392 19.7362"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pimaximizelinearrowduostroke;
