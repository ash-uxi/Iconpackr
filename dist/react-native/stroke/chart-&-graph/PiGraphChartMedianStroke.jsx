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
 * Pigraphchartmedianstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphchartmedianstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph chart median icon",
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
      d="M21 21H7C4.79086 21 3 19.2091 3 17V3M7 7L7.22319 6.72367C8.61414 5.00154 11.3274 5.32747 12.2709 7.33003L15.7291 14.67C16.6726 16.6725 19.3859 16.9985 20.7768 15.2763L21 15M14 14V14.01M14 17V17.01M14 5V5.01M14 8V8.01"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigraphchartmedianstroke;
