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
 * Pifilterfunnelsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifilterfunnelsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "filter funnel icon",
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
      d="M4 3C3.44772 3 3 3.44772 3 4V6.58579C3 7.11622 3.21071 7.62493 3.58579 8L9 13.4142V18C9 18.3148 9.14819 18.6111 9.4 18.8L13.4 21.8C13.703 22.0273 14.1084 22.0638 14.4472 21.8944C14.786 21.725 15 21.3788 15 21L15 13.4142L20.4142 8C20.7893 7.62493 21 7.11622 21 6.58579V4C21 3.44772 20.5523 3 20 3H4Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pifilterfunnelsolid;
