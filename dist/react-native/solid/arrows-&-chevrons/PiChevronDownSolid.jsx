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
 * Pichevrondownsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevrondownsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron down icon",
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
      d="M12.925 14.6732C14.3879 13.4957 15.6927 12.1235 16.8055 10.5927C16.9425 10.4067 17.0161 10.1726 16.9972 9.92417C16.9553 9.37347 16.4749 8.96102 15.9242 9.00293C13.3119 9.20173 10.6882 9.20173 8.07593 9.00293C7.52524 8.96102 7.04484 9.37347 7.00293 9.92417C6.98403 10.1726 7.05757 10.4067 7.19456 10.5927C8.30737 12.1235 9.61223 13.4957 11.0751 14.6732C11.6165 15.109 12.3836 15.109 12.925 14.6732Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pichevrondownsolid;
