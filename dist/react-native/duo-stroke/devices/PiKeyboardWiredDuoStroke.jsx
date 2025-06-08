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
 * Pikeyboardwiredduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyboardwiredduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "keyboard wired icon",
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
      d="M12 5H8.4C6.15979 5 5.03968 5 4.18404 5.43597C3.43139 5.81947 2.81947 6.43139 2.43597 7.18404C2 8.03969 2 9.15979 2 11.4V12.6C2 14.8402 2 15.9603 2.43597 16.816C2.81947 17.5686 3.43139 18.1805 4.18404 18.564C5.03968 19 6.15979 19 8.4 19H15.6C17.8402 19 18.9603 19 19.816 18.564C20.5686 18.1805 21.1805 17.5686 21.564 16.816C22 15.9603 22 14.8402 22 12.6V11.4C22 9.15979 22 8.03969 21.564 7.18404C21.1805 6.43139 20.5686 5.81947 19.816 5.43597C18.9603 5 17.8402 5 15.6 5H12ZM12 5V4.25C12 3.2835 12.7835 2.5 13.75 2.5H14C14.8284 2.5 15.5 1.82843 15.5 1"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M16 15H8M6 9H6.01M10 9H10.01M14 9H14.01M18 9H18.01M6 12H6.01M10 12H10.01M14 12H14.01M18 12H18.01"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pikeyboardwiredduostroke;
