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
 * Picloudsnowstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudsnowstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud snow icon",
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
      d="M6.01705 9.02561C6.00575 9.18227 6 9.34046 6 9.5M6.01705 9.02561C3.75887 9.26656 2 11.1779 2 13.5C2 15.1906 2.93233 16.6635 4.31089 17.4326M6.01705 9.02561C6.26002 5.65723 9.06969 3 12.5 3C15.3713 3 17.8077 4.86169 18.6681 7.44382C20.6276 8.28516 22 10.2323 22 12.5C22 14.5066 20.9254 16.2622 19.3204 17.2228M8 15V15.01M12 16V16.01M16 15V15.01M8 19V19.01M12 20V20.01M16 19V19.01"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picloudsnowstroke;
