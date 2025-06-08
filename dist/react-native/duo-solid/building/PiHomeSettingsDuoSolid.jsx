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
 * Pihomesettingsduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pihomesettingsduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "home settings icon",
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
    <g fill={color || "#000"} opacity={0.28}>
      {" "}
      <path d="M10.51 2.23a5 5 0 0 1 2.98 0c.61.19 1.136.525 1.681.963.528.425 1.132.996 1.88 1.702l2.716 2.565c.657.62 1.111 1.049 1.443 1.567.293.458.51.96.642 1.488.136.545.147 1.113.148 1.894a3 3 0 0 0-1.14-.237l-.444-.005-.317-.31a3 3 0 0 0-4.198 0l-.317.31-.444.005a3 3 0 0 0-2.968 2.968l-.005.444-.31.317a3 3 0 0 0 0 4.198l.31.317.005.444c.004.404.088.79.237 1.14H9.357c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C2 16.6 2 15.727 2 14.643V12.64c0-.903 0-1.527.148-2.125a5 5 0 0 1 .642-1.488c.332-.518.786-.947 1.443-1.567l2.716-2.565c.748-.706 1.352-1.277 1.88-1.702.545-.438 1.071-.773 1.68-.964M18.087 18l-.026.061-.061.026-.061-.026-.026-.061.026-.061.061-.026.061.026z" />{" "}
    </g>{" "}
    <path d="M18 18h.01M18 14l1.179 1.155 1.65.017.017 1.65L22 18l-1.154 1.179-.018 1.65-1.65.017L18 22l-1.179-1.154-1.65-.018-.016-1.65L14 18l1.155-1.179.017-1.65 1.65-.016z" />
  </Svg>
);

export default Pihomesettingsduosolid;
