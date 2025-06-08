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
 * Pitablelampoffsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitablelampoffsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "table lamp off icon",
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
      d="M8.61155 2C7.34216 2 6.21017 2.79893 5.78491 3.99497L3.05779 11.665C2.94893 11.9712 2.99562 12.3111 3.183 12.5766C3.37037 12.8421 3.67506 13 4.00001 13H11V17H10C8.34315 17 7.00001 18.3431 7.00001 20V21C7.00001 21.5523 7.44772 22 8.00001 22H16C16.5523 22 17 21.5523 17 21V20C17 18.3431 15.6569 17 14 17H13V13H20C20.325 13 20.6296 12.8421 20.817 12.5766C21.0044 12.3111 21.0511 11.9712 20.9422 11.665L18.2151 3.99497C17.7898 2.79893 16.6579 2 15.3885 2H8.61155Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pitablelampoffsolid;
