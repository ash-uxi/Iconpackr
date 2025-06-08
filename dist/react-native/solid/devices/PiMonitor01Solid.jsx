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
 * Pimonitor01solid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimonitor01solid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "monitor01 icon",
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
      d="M4.36392 1C3.97485 0.99998 3.62468 0.999961 3.33337 1.02376C3.02141 1.04925 2.68993 1.10694 2.36503 1.27249C1.89462 1.51217 1.51217 1.89462 1.27249 2.36503C1.10694 2.68993 1.04925 3.02141 1.02376 3.33337C0.999961 3.62468 0.99998 3.97479 1 4.36385V14.6361C0.99998 15.0252 0.999961 15.3753 1.02376 15.6666C1.04925 15.9786 1.10694 16.3101 1.27249 16.635C1.51217 17.1054 1.89462 17.4878 2.36503 17.7275C2.68993 17.8931 3.02141 17.9508 3.33337 17.9762C3.62468 18 3.9748 18 4.36388 18H11V21H7C6.44772 21 6 21.4477 6 22C6 22.5523 6.44772 23 7 23H17C17.5523 23 18 22.5523 18 22C18 21.4477 17.5523 21 17 21H13V18H19.6361C20.0252 18 20.3753 18 20.6666 17.9762C20.9786 17.9508 21.3101 17.8931 21.635 17.7275C22.1054 17.4878 22.4878 17.1054 22.7275 16.635C22.8931 16.3101 22.9508 15.9786 22.9762 15.6666C23 15.3753 23 15.0252 23 14.6361V4.3639C23 3.97482 23 3.62468 22.9762 3.33337C22.9508 3.02141 22.8931 2.68993 22.7275 2.36503C22.4878 1.89462 22.1054 1.51217 21.635 1.27249C21.3101 1.10694 20.9786 1.04925 20.6666 1.02376C20.3753 0.999961 20.0252 0.99998 19.6362 1H4.36392Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pimonitor01solid;
