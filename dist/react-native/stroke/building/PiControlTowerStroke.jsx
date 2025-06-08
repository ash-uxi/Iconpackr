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
 * Picontroltowerstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picontroltowerstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "control tower icon",
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
    <path d="M12 4L12 2" stroke={color} strokeWidth="2" fill="none" />
    <path d="M15 8L14 13" stroke={color} strokeWidth="2" fill="none" />
    <path
      d="M3.40565 5.8254C3.19748 4.88863 3.91031 4 4.86993 4H19.1301C20.0897 4 20.8025 4.88863 20.5944 5.8254L19.435 11.0423C19.1809 12.1862 18.1663 13 16.9946 13H7.00544C5.83369 13 4.81916 12.1862 4.56497 11.0423L3.40565 5.8254Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path d="M4 8H20" stroke={color} strokeWidth="2" fill="none" />
    <path
      d="M7 13L6.5 22M17 13L17.5 22"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path d="M9 8L10 13" stroke={color} strokeWidth="2" fill="none" />
  </Svg>
);

export default Picontroltowerstroke;
