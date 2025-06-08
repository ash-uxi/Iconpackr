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
 * Pidoublechevronleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidoublechevronleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "double chevron left icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M7.106 11.702A20.4 20.4 0 0 1 11 8l-.165 2.205a24 24 0 0 0 0 3.59L11 16a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596M13.106 11.702A20.4 20.4 0 0 1 17 8l-.165 2.205a24 24 0 0 0 0 3.59L17 16a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596" />
    </g>
    <path d="M13.106 11.702A20.4 20.4 0 0 1 17 8l-.165 2.205a24 24 0 0 0 0 3.59L17 16a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596M7.106 11.702A20.4 20.4 0 0 1 11 8l-.165 2.205a24 24 0 0 0 0 3.59L11 16a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596" />
  </Svg>
);

export default Pidoublechevronleftcontrast;
