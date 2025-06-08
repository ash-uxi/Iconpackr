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
 * Pilock02openstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilock02openstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "lock02 open icon",
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
      d="M13 10.1826V7.5C13 5.01472 15.0147 3 17.5 3C19.9853 3 22 5.01472 22 7.5V10M13 10.1826C12.3974 10 11.5835 10 10.2 10H6.8C5.41647 10 4.60258 10 4 10.1826C3.87081 10.2217 3.75133 10.2693 3.63803 10.327C3.07354 10.6146 2.6146 11.0735 2.32698 11.638C2 12.2798 2 13.1198 2 14.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H10.2C11.8802 21 12.7202 21 13.362 20.673C13.9265 20.3854 14.3854 19.9265 14.673 19.362C15 18.7202 15 17.8802 15 16.2V14.8C15 13.1198 15 12.2798 14.673 11.638C14.3854 11.0735 13.9265 10.6146 13.362 10.327C13.2487 10.2693 13.1292 10.2217 13 10.1826Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilock02openstroke;
