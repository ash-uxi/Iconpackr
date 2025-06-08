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
 * Pialarmoffstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialarmoffstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "alarm off icon",
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
      d="M5 3L2 6M14.2827 15.3696L14.5 15.5M19.4843 10.168C19.8176 11.0484 20 12.0029 20 13C20 17.4183 16.4183 21 12 21C11.0029 21 10.0484 20.8176 9.16805 20.4843M5.86515 18.1348C4.70094 16.7454 4 14.9545 4 13C4 8.58172 7.58172 5 12 5C13.9545 5 15.7454 5.70094 17.1348 6.86515M5.86515 18.1348L2 22M5.86515 18.1348L12 12M12 12V10M12 12L17.1348 6.86515M17.1348 6.86515L20 4M22 2L20 4M20 4L19 3"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pialarmoffstroke;
