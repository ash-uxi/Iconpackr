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
 * Piclouddefaultstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piclouddefaultstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud default icon",
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
      d="M6.01705 11.0256C6.26 7.65724 9.06969 5 12.5 5C15.3713 5 17.8077 6.86169 18.6681 9.44382C20.6276 10.2852 22 12.2323 22 14.5C22 17.5376 19.5376 20 16.5 20H6.5C4.01472 20 2 17.9853 2 15.5C2 13.1779 3.75887 11.2666 6.01705 11.0256ZM6.01705 11.0256C5.96918 11.6892 6.02504 12.3697 6.17393 13"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piclouddefaultstroke;
