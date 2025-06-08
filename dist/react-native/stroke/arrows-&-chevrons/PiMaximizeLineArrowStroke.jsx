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
 * Pimaximizelinearrowstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimaximizelinearrowstroke = ({
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
      d="M19.7142 9.94268C20.0092 8.1811 20.0761 6.40091 19.9138 4.64657C19.8998 4.49608 19.835 4.36296 19.736 4.26398M14.0573 4.28582C15.8189 3.99085 17.5991 3.92395 19.3534 4.08624C19.5039 4.10016 19.637 4.165 19.736 4.26398M19.736 4.26398L4.26398 19.736M4.28582 14.0573C3.99085 15.8189 3.92395 17.5991 4.08624 19.3534C4.10016 19.5039 4.165 19.637 4.26398 19.736M9.94268 19.7142C8.1811 20.0092 6.40091 20.0761 4.64657 19.9138C4.49608 19.8998 4.36296 19.835 4.26398 19.736"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimaximizelinearrowstroke;
