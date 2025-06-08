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
 * Picalendarsettingsduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picalendarsettingsduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "calendar settings icon",
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
      <path d="M11.916 3h.168c1.755 0 3.042 0 4.05.137.56.076 1.064.197 1.545.396a7 7 0 0 1 3.788 3.788c.318.768.439 1.605.491 2.628.035.684.041 1.492.042 2.46a3 3 0 0 0-1.14-.237l-.444-.005-.317-.31a3 3 0 0 0-4.198 0l-.317.31-.444.005a3 3 0 0 0-2.968 2.968l-.005.444-.31.317a3 3 0 0 0 0 4.198l.31.317.005.444c.008.841.363 1.6.928 2.139L12.037 23h-.074c-1.366 0-2.443 0-3.314-.06-.888-.06-1.634-.186-2.328-.473a7 7 0 0 1-3.788-3.788c-.287-.694-.413-1.44-.474-2.328C2 15.481 2 14.404 2 13.037v-.063c0-1.223 0-2.212.042-3.025.052-1.023.173-1.86.49-2.628a7 7 0 0 1 3.79-3.788c.48-.2.984-.32 1.543-.396C8.874 3 10.161 3 11.916 3M18.087 18l-.026.061-.061.026-.061-.026-.026-.061.026-.061.061-.026.061.026z" />{" "}
    </g>{" "}
    <path d="M20.96 10H3.04M8 2v4m8-4v4m2 12h.01M18 14l1.178 1.155 1.65.017.017 1.65L22 18l-1.155 1.179-.017 1.65-1.65.017L18 22l-1.179-1.154-1.65-.018-.017-1.65L14 18l1.154-1.179.017-1.65 1.65-.016z" />
  </Svg>
);

export default Picalendarsettingsduosolid;
