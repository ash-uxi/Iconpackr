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
 * Piarrowrightdownsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightdownsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right down icon",
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
      d="M17.5152 9.10039L14.1903 12.7758L6.11604 4.70158C5.72552 4.31106 5.09235 4.31106 4.70183 4.70158C4.3113 5.09211 4.3113 5.72527 4.70183 6.1158L12.7761 14.19L9.10064 17.515C8.81395 17.7743 8.70243 18.1757 8.81423 18.5457C8.92602 18.9158 9.2411 19.1883 9.62343 19.2455C12.2958 19.6456 15.0033 19.6983 17.6783 19.4027C18.131 19.3526 18.5382 19.1495 18.844 18.8437C19.1498 18.5379 19.3529 18.1307 19.4029 17.678C19.6985 15.0031 19.6459 12.2956 19.2458 9.62318C19.1885 9.24086 18.916 8.92578 18.546 8.81399C18.1759 8.70219 17.7745 8.81371 17.5152 9.10039Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piarrowrightdownsolid;
