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
 * Pimusicbeamnoteoffduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimusicbeamnoteoffduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "music beam note off icon",
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
    <path d="M22 2L2 22" stroke={color || "#000"} strokeWidth="2" fill="none" />
    <path
      d="M8 12.0768V8.02976C8 7.22531 8.50333 6.50284 9.2687 6.20869L19.9515 2.10303C20.6148 1.84813 21.3145 2.08743 21.7003 2.58722M8 12.0768L14.5882 9.54481M8 12.0768V15.9899M22 15.9899C22 17.6108 20.6569 18.9248 19 18.9248C17.3431 18.9248 16 17.6108 16 15.9899C16 14.3691 17.3431 13.0551 19 13.0551C20.6569 13.0551 22 14.3691 22 15.9899ZM22 15.9899V7.82539M7.12131 16.8495C6.57842 16.3184 5.82842 15.9899 5 15.9899C3.34315 15.9899 2 17.3039 2 18.9248C2 19.7352 2.33578 20.4689 2.87867 21"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pimusicbeamnoteoffduostroke;
