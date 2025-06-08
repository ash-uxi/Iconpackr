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
 * Picameracheckduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picameracheckduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "camera check icon",
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
      d="M16.7569 6.00013C17.914 6.00013 18.4925 6.00014 18.9592 6.15761C19.8465 6.45703 20.5431 7.15363 20.8425 8.04095C21 8.50762 21 9.08616 21 10.2432V15.2001C21 16.8803 21 17.7204 20.673 18.3621C20.3854 18.9266 19.9265 19.3855 19.362 19.6732C18.7202 20.0001 17.8802 20.0001 16.2 20.0001L7.81563 20.0001C6.13547 20.0001 5.29539 20.0001 4.65365 19.6732C4.08917 19.3855 3.63023 18.9266 3.34261 18.3621C3.01562 17.7204 3.01562 16.8803 3.01563 15.2001L3.01563 10.23C3.01563 9.0853 3.01563 8.51296 3.16979 8.05082C3.46844 7.15552 4.17101 6.45295 5.06631 6.1543C5.52845 6.00014 6.10079 6.00014 7.24547 6.00014C7.4591 6.00014 7.56591 6.00014 7.66493 5.97992C7.85565 5.94097 8.03085 5.84721 8.16906 5.71013C8.24081 5.63896 8.30006 5.55009 8.41857 5.37235L9.52501 3.7129C9.69867 3.45243 9.7855 3.3222 9.90022 3.22792C10.0018 3.14445 10.1188 3.08183 10.2446 3.04363C10.3867 3.00049 10.5432 3.00049 10.8562 3.00049L13.1438 3.00049C13.4568 3.00049 13.6133 3.00049 13.7554 3.04363C13.8812 3.08183 13.9982 3.14445 14.0998 3.22792C14.2145 3.3222 14.3013 3.45243 14.475 3.7129L15.5801 5.37038C15.6999 5.55004 15.7598 5.63988 15.8325 5.71166C15.9699 5.8474 16.1438 5.94042 16.3329 5.97948C16.433 6.00013 16.541 6.00013 16.7569 6.00013Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9 13.3133L11.3412 15.652C12.4672 13.6831 14.0256 11.9954 15.8987 10.7163"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picameracheckduostroke;
