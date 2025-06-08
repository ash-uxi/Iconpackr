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
 * Pibulbboltstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibulbboltstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bulb bolt icon",
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
      d="M10 22H14M12.3846 6.69922L10.5486 9.39922C10.4279 9.56229 10.5429 9.77307 10.7729 9.81037L13.2271 10.2083C13.4553 10.2453 13.5708 10.4535 13.4535 10.6165L11.3671 13.2992M5 9.73684C5 6.01619 8.13401 3 12 3C15.866 3 19 6.01619 19 9.73684C19 11.7763 18.0583 13.6042 16.5706 14.8396C15.9422 15.3614 15.4019 16.0093 15.1965 16.7998L14.9167 17.8771C14.7449 18.5384 14.148 19 13.4649 19H10.5351C9.85196 19 9.25508 18.5384 9.08332 17.8771L8.80348 16.7998C8.59811 16.0093 8.05785 15.3614 7.42944 14.8396C5.94169 13.6042 5 11.7763 5 9.73684Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibulbboltstroke;
