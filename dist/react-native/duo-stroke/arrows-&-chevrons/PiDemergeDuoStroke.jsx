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
 * Pidemergeduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidemergeduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "demerge icon",
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
      d="M4.26392 4.26367L11.9999 11.9997L11.9999 19.9997M19.736 4.26367L14.9999 8.99969"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9.94268 4.28582C8.1811 3.99085 6.40091 3.92395 4.64657 4.08624C4.49608 4.10016 4.36296 4.165 4.26398 4.26398C4.165 4.36296 4.10016 4.49608 4.08624 4.64657C3.92395 6.40091 3.99085 8.1811 4.28582 9.94268M14.0573 4.28582C15.8189 3.99085 17.5991 3.92395 19.3534 4.08624C19.5039 4.10016 19.637 4.165 19.736 4.26398C19.835 4.36296 19.8998 4.49608 19.9138 4.64657C20.0761 6.40091 20.0092 8.1811 19.7142 9.94268"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidemergeduostroke;
