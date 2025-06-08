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
 * Pisidebarrightopenstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisidebarrightopenstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sidebar right open icon",
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
      d="M15 20.989C14.423 21 13.7635 21 13 21H11C8.19974 21 6.79961 21 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3 17.2004 3 15.8003 3 13V11C3 8.19974 3 6.79961 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.79961 3 8.19974 3 11 3H13C13.7635 3 14.423 3 15 3.01105M15 20.989C16.5392 20.9595 17.492 20.8514 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C21 17.2004 21 15.8003 21 13V11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.492 3.14859 16.5392 3.04052 15 3.01105M15 20.989L15 3.01105M10.5 9C9.40359 9.79655 8.42154 10.7303 7.57935 11.7766C7.47355 11.908 7.47355 12.092 7.57935 12.2234C8.42154 13.2697 9.40359 14.2035 10.5 15"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pisidebarrightopenstroke;
