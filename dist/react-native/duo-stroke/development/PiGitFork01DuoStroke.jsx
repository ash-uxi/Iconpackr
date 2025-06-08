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
 * Pigitfork01duostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitfork01duostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git fork01 icon",
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
      d="M12 12H10.8C9.11984 12 8.27976 12 7.63803 11.673C7.07354 11.3854 6.6146 10.9265 6.32698 10.362C6.09786 9.91231 6.02929 9.36525 6.00877 8.5L6 8.50001M12 12V15.5M12 12H13.2C14.8802 12 15.7202 12 16.362 11.673C16.9265 11.3854 17.3854 10.9265 17.673 10.362C17.9021 9.91231 17.9707 9.36525 17.9912 8.5L18 8.50001"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M15 18.5C15 20.1569 13.6569 21.5 12 21.5C10.3431 21.5 9 20.1569 9 18.5C9 16.8431 10.3431 15.5 12 15.5C13.6569 15.5 15 16.8431 15 18.5Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M15 5.5C15 7.15393 16.3384 8.49526 17.9912 8.49999C17.9942 8.5 17.9971 8.5 18 8.5C19.6569 8.5 21 7.15685 21 5.5C21 3.84315 19.6569 2.5 18 2.5C16.3431 2.5 15 3.84315 15 5.5Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9 5.5C9 7.15393 7.66159 8.49526 6.00877 8.49999C6.00584 8.5 6.00292 8.5 6 8.5C4.34315 8.5 3 7.15685 3 5.5C3 3.84315 4.34315 2.5 6 2.5C7.65685 2.5 9 3.84315 9 5.5Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigitfork01duostroke;
