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
 * Pilock02closestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilock02closestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "lock02 close icon",
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
      d="M16 10.1826C15.3974 10 14.5835 10 13.2 10H9.8C8.41647 10 7.60258 10 7 10.1826M16 10.1826C16.1292 10.2217 16.2487 10.2693 16.362 10.327C16.9265 10.6146 17.3854 11.0735 17.673 11.638C18 12.2798 18 13.1198 18 14.8V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V14.8C5 13.1198 5 12.2798 5.32698 11.638C5.6146 11.0735 6.07354 10.6146 6.63803 10.327C6.75133 10.2693 6.87081 10.2217 7 10.1826M16 10.1826V7.5C16 5.01472 13.9853 3 11.5 3C9.01472 3 7 5.01472 7 7.5V10.1826"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilock02closestroke;
