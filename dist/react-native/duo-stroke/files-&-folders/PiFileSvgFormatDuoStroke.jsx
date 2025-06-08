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
 * Pifilesvgformatduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifilesvgformatduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "file svg format icon",
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
      d="M21.2496 15C20.7987 14.3814 20.1812 14 19.5 14C18.1193 14 17 15.567 17 17.5C17 19.433 18.1193 21 19.5 21C20.1812 21 20.7987 20.6186 21.2496 20V18H20.5M7 14H4.75C3.7835 14 3 14.7835 3 15.75C3 16.7165 3.7835 17.5 4.75 17.5H6.25C7.2165 17.5 8 18.2835 8 19.25C8 20.2165 7.2165 21 6.25 21H3M10 14L11.5508 21H13.1016L14.6523 14M18.1255 5.12558L16.8745 3.87461C16.1827 3.18281 15.8368 2.8369 15.4331 2.58954C15.0753 2.37022 14.6851 2.2086 14.2769 2.11062C14.1869 2.089 14.0957 2.07161 14 2.05762V3.2001C14 4.88025 14 5.72033 14.327 6.36207C14.6146 6.92656 15.0735 7.3855 15.638 7.67312C16.2798 8.0001 17.1198 8.0001 18.8 8.0001L19.9425 8.0001C19.9285 7.90439 19.9111 7.81323 19.8895 7.72317C19.7915 7.31503 19.6299 6.92485 19.4106 6.56696C19.1632 6.16329 18.8173 5.81739 18.1255 5.12558Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M4 10V8.4C4 6.15979 4 5.03968 4.43597 4.18404C4.81947 3.43139 5.43139 2.81947 6.18404 2.43597C7.03968 2 8.15979 2 10.4 2H12.349C13.3274 2 13.8166 2 14.2769 2.11052C14.6851 2.20851 15.0753 2.37012 15.4331 2.58944C15.8368 2.83681 16.1827 3.18271 16.8745 3.87451L18.1255 5.12548C18.8173 5.81729 19.1632 6.16319 19.4106 6.56686C19.6299 6.92475 19.7915 7.31493 19.8895 7.72307C20 8.18342 20 8.6726 20 9.65097V10"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pifilesvgformatduostroke;
