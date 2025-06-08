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
 * Pigraphchartpyramidstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphchartpyramidstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph chart pyramid icon",
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
      d="M19.3733 16.0688L20.8002 18.7042C21.3733 19.7627 20.645 21.0767 19.4851 21.0767H4.51494C3.35501 21.0767 2.62665 19.7628 3.19979 18.7042L4.62669 16.0688M19.3733 16.0688H4.62669M19.3733 16.0688L16.6661 11.0688M4.62669 16.0688L7.33391 11.0688M16.6661 11.0688L13.3151 4.87994C12.7352 3.8089 11.2648 3.8089 10.6848 4.87994L7.33391 11.0688M16.6661 11.0688H7.33391"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigraphchartpyramidstroke;
