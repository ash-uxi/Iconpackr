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
 * Pipaintbrushstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipaintbrushstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "paint brush icon",
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
      d="M9.48421 11C10.1622 9.24803 11.451 7.79138 13.1226 6.90642L20.3925 3.05761C20.8067 2.83833 21.2551 3.28669 21.0358 3.70089L17.187 10.9709C16.2863 12.6721 14.7936 13.9768 13 14.6447M4.77551 15.2723C4.12443 16.0628 4.36328 16.94 3.99241 17.7948C3.65709 18.5676 2.84409 19.0655 2 19.0091C3.42052 21.4768 7.01349 21.6794 8.72141 19.4551C9.65433 18.2401 10.1231 16.4381 8.8504 15.1654C7.63373 13.9486 5.80114 14.027 4.77551 15.2723Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipaintbrushstroke;
