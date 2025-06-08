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
 * Pigraphtrendlineupwardduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphtrendlineupwardduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph trend line upward icon",
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
      d="M21 21H7C4.79086 21 3 19.2091 3 17V3"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M7 14.0001L7.61026 12.1693C8.35529 9.93425 11.5295 9.97116 12.2224 12.223C12.8649 14.3112 15.7261 14.5479 16.7032 12.5938L19.166 7.66807M19.166 7.66807C19.2863 7.72843 19.3865 7.82898 19.4454 7.95914C19.8807 8.92154 20.196 9.93449 20.3837 10.9752M19.166 7.66807C19.0457 7.6077 18.9052 7.58754 18.7657 7.61815C17.734 7.84452 16.7335 8.19731 15.787 8.66894"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigraphtrendlineupwardduostroke;
