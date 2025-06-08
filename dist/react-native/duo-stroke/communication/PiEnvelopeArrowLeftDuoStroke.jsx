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
 * Pienvelopearrowleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pienvelopearrowleftduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "envelope arrow left icon",
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
      d="M12 20.0001H10C7.19974 20.0001 5.79961 20.0001 4.73005 19.4552C3.78924 18.9758 3.02433 18.2109 2.54497 17.2701C2 16.2005 2 14.8004 2 12.0001C2 10.0061 2 8.72202 2.19678 7.76172M21.8032 7.76172C22 8.72202 22 10.0061 22 12.0001C22 13.5239 22 14.6332 21.9122 15.5001"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M18.4099 22.5728C17.5639 21.9383 16.7999 21.2022 16.1349 20.3816C16.045 20.2706 16 20.136 16 20.0014M18.4099 17.4299C17.5639 18.0644 16.7999 18.8005 16.1349 19.6212C16.045 19.7321 16 19.8668 16 20.0014M16 20.0014H22M10 4H14C16.8003 4 18.2004 4 19.27 4.54497C20.2108 5.02433 20.9757 5.78924 21.455 6.73005C21.6119 7.03798 21.7237 7.37332 21.8032 7.76159L16.295 11.2668C14.7385 12.2573 13.9602 12.7526 13.1238 12.9455C12.3843 13.1161 11.6157 13.1161 10.8762 12.9455C10.0398 12.7526 9.26153 12.2573 7.70499 11.2668L2.19678 7.76159C2.27634 7.37332 2.38807 7.03798 2.54497 6.73005C3.02433 5.78924 3.78924 5.02433 4.73005 4.54497C5.79961 4 7.19974 4 10 4Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pienvelopearrowleftduostroke;
