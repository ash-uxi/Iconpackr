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
 * Piwaterdropletsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwaterdropletsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "water droplet icon",
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
      d="M12.6459 2.23715C12.4653 2.08434 12.2364 2.00049 11.9999 2.00049C11.7633 2.00049 11.5344 2.08434 11.3539 2.23715C4.76087 7.81515 2.94087 12.6942 4.02287 16.4052C5.08987 20.0652 8.82287 22.0002 11.9999 22.0002C15.1779 22.0002 18.9099 20.0642 19.9769 16.4052C21.0589 12.6942 19.2389 7.81515 12.6459 2.23715Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Piwaterdropletsolid;
