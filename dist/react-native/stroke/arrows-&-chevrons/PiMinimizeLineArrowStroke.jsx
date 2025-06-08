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
 * Piminimizelinearrowstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piminimizelinearrowstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "minimize line arrow icon",
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
      d="M12.7446 5.59859C12.444 7.36577 12.372 9.15099 12.53 10.9097C12.5435 11.0605 12.6082 11.1938 12.7072 11.2928M18.4014 11.2554C16.6342 11.556 14.849 11.628 13.0903 11.47C12.9395 11.4565 12.8062 11.3918 12.7072 11.2928M12.7072 11.2928L20 4M11.2556 18.4013C11.5562 16.6341 11.6281 14.8489 11.4701 13.0902C11.4566 12.9393 11.3919 12.806 11.293 12.707M5.59874 12.7444C7.36591 12.4438 9.15114 12.3719 10.9098 12.5299C11.0607 12.5434 11.194 12.6081 11.293 12.707M11.293 12.707L4 20"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piminimizelinearrowstroke;
