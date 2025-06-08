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
 * Pigitfork01stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitfork01stroke = ({
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
      d="M12 15.5C10.3431 15.5 9 16.8431 9 18.5C9 20.1569 10.3431 21.5 12 21.5C13.6569 21.5 15 20.1569 15 18.5C15 16.8431 13.6569 15.5 12 15.5ZM12 15.5V12M12 12H10.8C9.11984 12 8.27976 12 7.63803 11.673C7.07354 11.3854 6.6146 10.9265 6.32698 10.362C6.09786 9.9123 6.02929 9.36523 6.00877 8.49999M12 12H13.2C14.8802 12 15.7202 12 16.362 11.673C16.9265 11.3854 17.3854 10.9265 17.673 10.362C17.9021 9.9123 17.9707 9.36523 17.9912 8.49999M6.00877 8.49999C7.66159 8.49526 9 7.15393 9 5.5C9 3.84315 7.65685 2.5 6 2.5C4.34315 2.5 3 3.84315 3 5.5C3 7.15685 4.34315 8.5 6 8.5C6.00292 8.5 6.00584 8.5 6.00877 8.49999ZM17.9912 8.49999C16.3384 8.49526 15 7.15393 15 5.5C15 3.84315 16.3431 2.5 18 2.5C19.6569 2.5 21 3.84315 21 5.5C21 7.15685 19.6569 8.5 18 8.5C17.9971 8.5 17.9942 8.5 17.9912 8.49999Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigitfork01stroke;
