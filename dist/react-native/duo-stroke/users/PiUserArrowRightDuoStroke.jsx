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
 * Piuserarrowrightduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserarrowrightduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user arrow right icon",
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
      d="M12.4 21H6C4.89543 21 4 20.1046 4 19C4 16.7909 5.79086 15 8 15H12.4"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M19.1885 21C20.1755 20.2598 21.0668 19.401 21.8426 18.4436C21.9475 18.3141 22 18.157 22 18M19.1885 15C20.1755 15.7402 21.0668 16.599 21.8426 17.5564C21.9475 17.6859 22 17.843 22 18M22 18H15M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piuserarrowrightduostroke;
