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
 * Pienvelopearrowdownduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pienvelopearrowdownduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "envelope arrow down icon",
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
      d="M13.6864 19.9999H10C7.19974 19.9999 5.79961 19.9999 4.73005 19.4549C3.78924 18.9756 3.02433 18.2107 2.54497 17.2698C2 16.2003 2 14.8002 2 11.9999C2 10.0058 2 8.72178 2.19678 7.76147M21.9999 11.5351C21.9987 9.8026 21.9843 8.645 21.8032 7.76147"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M17.4284 18.5918C18.0629 19.4378 18.799 20.2018 19.6197 20.8668C19.7306 20.9567 19.8653 21.0017 19.9999 21.0017M22.5713 18.5918C21.9368 19.4378 21.2007 20.2018 20.3801 20.8668C20.2691 20.9567 20.1345 21.0017 19.9999 21.0017M19.9999 21.0017V15.0017M10 4H14C16.8003 4 18.2004 4 19.27 4.54497C20.2108 5.02433 20.9757 5.78924 21.455 6.73005C21.6119 7.03798 21.7237 7.37332 21.8032 7.76159L16.295 11.2668C14.7385 12.2573 13.9602 12.7526 13.1238 12.9455C12.3843 13.1161 11.6157 13.1161 10.8762 12.9455C10.0398 12.7526 9.26153 12.2573 7.70499 11.2668L2.19678 7.76159C2.27634 7.37332 2.38807 7.03798 2.54497 6.73005C3.02433 5.78924 3.78924 5.02433 4.73005 4.54497C5.79961 4 7.19974 4 10 4Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pienvelopearrowdownduostroke;
