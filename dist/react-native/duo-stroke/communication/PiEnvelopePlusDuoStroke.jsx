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
 * Pienvelopeplusduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pienvelopeplusduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "envelope plus icon",
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
      d="M12.0041 19.9999H10C7.19974 19.9999 5.79961 19.9999 4.73005 19.4549C3.78924 18.9756 3.02433 18.2107 2.54497 17.2698C2 16.2003 2 14.8002 2 11.9999C2 10.0058 2 8.72178 2.19678 7.76147M21.8032 7.76147C22 8.72178 22 10.0058 22 11.9999C22 12.916 22 13.6822 21.9809 14.3361"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M16 20H19M19 20H22M19 20V17M19 20V23M10 4H14C16.8003 4 18.2004 4 19.27 4.54497C20.2108 5.02433 20.9757 5.78924 21.455 6.73005C21.6119 7.03798 21.7237 7.37332 21.8032 7.76159L16.295 11.2668C14.7385 12.2573 13.9602 12.7526 13.1238 12.9455C12.3843 13.1161 11.6157 13.1161 10.8762 12.9455C10.0398 12.7526 9.26153 12.2573 7.70499 11.2668L2.19678 7.76159C2.27634 7.37332 2.38807 7.03798 2.54497 6.73005C3.02433 5.78924 3.78924 5.02433 4.73005 4.54497C5.79961 4 7.19974 4 10 4Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pienvelopeplusduostroke;
