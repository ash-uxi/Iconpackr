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
 * Piarrowbiguprightstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbiguprightstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big up right icon",
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
      d="M5.23632 16.784L7.21622 18.7639C7.61224 19.1599 7.81025 19.3579 8.03858 19.4321C8.23942 19.4974 8.45577 19.4974 8.65661 19.4321C8.88494 19.3579 9.08295 19.1599 9.47896 18.7639L16.4958 11.7471C17.3936 12.7382 18.259 13.7594 19.0906 14.8091C19.5425 11.7906 19.6019 8.73302 19.2681 5.71268C19.2395 5.45358 19.1239 5.22276 18.9507 5.04954C18.7775 4.87633 18.5466 4.76073 18.2875 4.7321C15.2672 4.39834 12.2096 4.45769 9.19109 4.90963C10.2408 5.74118 11.262 6.60663 12.2532 7.50443L5.23632 14.5213C4.84031 14.9173 4.6423 15.1153 4.56811 15.3436C4.50285 15.5445 4.50285 15.7608 4.56811 15.9616C4.6423 16.19 4.84031 16.388 5.23632 16.784Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowbiguprightstroke;
