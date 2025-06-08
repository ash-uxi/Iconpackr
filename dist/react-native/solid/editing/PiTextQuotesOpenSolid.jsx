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
 * Pitextquotesopensolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitextquotesopensolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "text quotes open icon",
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
      d="M18.5753 7.11771C17.4691 7.89601 16.5597 8.93331 15.9349 10.1411C16.274 10.0476 16.6312 9.99771 17 9.99771C19.2091 9.99771 21 11.7886 21 13.9977C21 16.2069 19.2091 17.9977 17 17.9977C14.791 17.9977 13 16.2073 13 13.998C13 10.4762 14.7505 7.36331 17.4245 5.48201C17.8762 5.16421 18.4999 5.27281 18.8177 5.72451C19.1355 6.17621 19.027 6.80001 18.5753 7.11771ZM8.5753 7.11771C7.4691 7.89601 6.5597 8.93331 5.9349 10.1411C6.274 10.0476 6.6312 9.99771 7 9.99771C9.2091 9.99771 11 11.7886 11 13.9977C11 16.2069 9.2091 17.9977 7 17.9977C4.791 17.9977 3 16.2073 3 13.998C3 10.4762 4.7505 7.36331 7.4245 5.48201C7.8762 5.16421 8.5 5.27281 8.8177 5.72451C9.1355 6.17621 9.027 6.80001 8.5753 7.11771Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pitextquotesopensolid;
