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
 * Pifile02codeduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifile02codeduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "file02 code icon",
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
      d="M13.7143 16.8351C14.5496 16.2282 15.2979 15.5168 15.9395 14.7196C16.0202 14.6195 16.0202 14.4793 15.9395 14.3792C15.2979 13.582 14.5496 12.8706 13.7143 12.2637M10.2857 12.2637C9.45035 12.8706 8.70213 13.582 8.06046 14.3792C7.97985 14.4793 7.97985 14.6195 8.06046 14.7196C8.70213 15.5168 9.45035 16.2282 10.2857 16.8351M20 10C20 5.58172 16.4183 2 12 2H11C12.6569 2 14 3.34315 14 5V5.6C14 5.9716 14 6.1574 14.0246 6.31287C14.1602 7.16865 14.8313 7.83983 15.6871 7.97538C15.8426 8 16.0284 8 16.4 8L17 8C18.6569 8 20 9.34315 20 11V10Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H12C16.4183 2 20 5.58172 20 10V18C20 20.2091 18.2091 22 16 22Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pifile02codeduostroke;
