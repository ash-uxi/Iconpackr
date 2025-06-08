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
 * Piusersquareduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piusersquareduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user square icon",
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
      d="M3 11C3 8.19974 3 6.79961 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.79961 3 8.19974 3 11 3H13C15.8003 3 17.2004 3 18.27 3.54497C19.2108 4.02433 19.9757 4.78924 20.455 5.73005C21 6.79961 21 8.19974 21 11V13C21 15.8003 21 17.2004 20.455 18.27C19.9757 19.2108 19.2108 19.9757 18.27 20.455C17.2004 21 15.8003 21 13 21H11C8.19974 21 6.79961 21 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3 17.2004 3 15.8003 3 13V11Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M5.49707 17.641C5.79444 17.1406 6.21687 16.7262 6.72287 16.4385C7.22886 16.1508 7.801 15.9997 8.38307 16H15.6171C16.8441 16 17.9171 16.658 18.5031 17.641M15.0001 10C15.0001 10.7956 14.684 11.5587 14.1214 12.1213C13.5588 12.6839 12.7957 13 12.0001 13C11.2044 13 10.4414 12.6839 9.87875 12.1213C9.31614 11.5587 9.00007 10.7956 9.00007 10C9.00007 9.20435 9.31614 8.44129 9.87875 7.87868C10.4414 7.31607 11.2044 7 12.0001 7C12.7957 7 13.5588 7.31607 14.1214 7.87868C14.684 8.44129 15.0001 9.20435 15.0001 10Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piusersquareduostroke;
