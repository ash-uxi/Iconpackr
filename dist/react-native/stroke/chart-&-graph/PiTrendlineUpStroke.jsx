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
 * Pitrendlineupstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitrendlineupstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "trendline up icon",
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
      d="M2 16.852L2.72917 15.9145C4.52868 13.6009 6.77699 11.6745 9.33921 10.2511C9.65601 10.0751 10.0549 10.1718 10.2559 10.4733L13.4676 15.2908C13.6741 15.6006 14.1004 15.6698 14.3943 15.4412C16.9557 13.449 18.9953 10.865 20.338 7.91095L20.6593 7.20411M22 11.8258C21.8189 10.3227 21.4411 8.85036 20.8767 7.44659C20.8337 7.33966 20.7554 7.25547 20.6593 7.20411M16.0136 8.36958C17.4059 7.77484 18.8699 7.36586 20.3678 7.15274C20.4709 7.13806 20.5724 7.15767 20.6593 7.20411"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitrendlineupstroke;
