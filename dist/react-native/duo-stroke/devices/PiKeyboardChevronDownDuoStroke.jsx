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
 * Pikeyboardchevrondownduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyboardchevrondownduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "keyboard chevron down icon",
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
      d="M15.6 3H8.4C6.15979 3 5.03968 3 4.18404 3.43597C3.43139 3.81947 2.81947 4.43139 2.43597 5.18404C2 6.03968 2 7.15979 2 9.4V10.6C2 12.8402 2 13.9603 2.43597 14.816C2.81947 15.5686 3.43139 16.1805 4.18404 16.564C5.03968 17 6.15979 17 8.4 17H15.6C17.8402 17 18.9603 17 19.816 16.564C20.5686 16.1805 21.1805 15.5686 21.564 14.816C22 13.9603 22 12.8402 22 10.6V9.4C22 7.15979 22 6.03968 21.564 5.18404C21.1805 4.43139 20.5686 3.81947 19.816 3.43597C18.9603 3 17.8402 3 15.6 3Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M16 13H8M6 7H6.01M10 7H10.01M14 7H14.01M18 7H18.01M6 10H6.01M10 10H10.01M14 10H14.01M18 10H18.01"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M7 20.1658L12 22.1658L17 20.1658"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pikeyboardchevrondownduostroke;
