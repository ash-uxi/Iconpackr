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
 * Pienvelopedefaultduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pienvelopedefaultduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "envelope default icon",
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
      d="M14 4H10C7.19974 4 5.79961 4 4.73005 4.54497C3.78924 5.02433 3.02433 5.78924 2.54497 6.73005C2.38807 7.03798 2.27634 7.37332 2.19678 7.76159L7.70499 11.2668C9.26153 12.2573 10.0398 12.7526 10.8762 12.9455C11.6157 13.1161 12.3843 13.1161 13.1238 12.9455C13.9602 12.7526 14.7385 12.2573 16.295 11.2668L21.8032 7.76159C21.7237 7.37332 21.6119 7.03798 21.455 6.73005C20.9757 5.78924 20.2108 5.02433 19.27 4.54497C18.2004 4 16.8003 4 14 4Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M21.8032 7.76147C22 8.72178 22 10.0058 22 11.9999C22 14.8002 22 16.2003 21.455 17.2698C20.9757 18.2107 20.2108 18.9756 19.27 19.4549C18.2004 19.9999 16.8003 19.9999 14 19.9999H10C7.19974 19.9999 5.79961 19.9999 4.73005 19.4549C3.78924 18.9756 3.02433 18.2107 2.54497 17.2698C2 16.2003 2 14.8002 2 11.9999C2 10.0058 2 8.72178 2.19678 7.76147"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pienvelopedefaultduostroke;
