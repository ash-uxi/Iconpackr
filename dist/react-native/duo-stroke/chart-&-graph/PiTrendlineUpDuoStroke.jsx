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
 * Pitrendlineupduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitrendlineupduostroke = ({
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
      d="M2 16.852L2.72917 15.9145C4.52868 13.6009 6.77699 11.6745 9.33921 10.2511C9.65601 10.0751 10.0549 10.1718 10.2559 10.4733L13.4676 15.2908C13.6741 15.6006 14.1004 15.6698 14.3943 15.4412C16.9557 13.449 18.9953 10.865 20.338 7.91094L20.6593 7.2041"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M22.0001 11.8256C21.819 10.3224 21.4412 8.85011 20.8768 7.44635C20.8338 7.33942 20.7555 7.25523 20.6594 7.20386C20.5725 7.15742 20.471 7.13782 20.3679 7.15249C18.87 7.36561 17.406 7.77459 16.0137 8.36934"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitrendlineupduostroke;
