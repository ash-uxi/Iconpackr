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
 * Piplanetringstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piplanetringstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "planet ring icon",
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
      d="M18.3394 7.1194C20.7718 6.30651 22.4493 6.06874 22.7206 6.60817C23.2169 7.59496 18.8195 10.8089 12.8988 13.7867C6.97801 16.7646 1.77596 18.3786 1.27966 17.3918C1.00841 16.8525 2.19886 15.648 4.30083 14.1803M18.3394 7.1194C16.8765 5.2222 14.5811 4 12.0001 4C7.58184 4 4.00011 7.58172 4.00011 12C4.00011 12.7558 4.10493 13.4872 4.30083 14.1803M18.3394 7.1194C19.3807 8.46999 20.0001 10.1627 20.0001 12C20.0001 16.4183 16.4184 20 12.0001 20C8.33768 20 5.25005 17.5389 4.30083 14.1803"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piplanetringstroke;
