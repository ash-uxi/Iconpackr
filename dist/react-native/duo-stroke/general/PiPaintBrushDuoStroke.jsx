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
 * Pipaintbrushduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipaintbrushduostroke = ({
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
      d="M8.8504 15.1651C7.63373 13.9483 5.80114 14.0267 4.77551 15.2719C4.12443 16.0625 4.36328 16.9397 3.99241 17.7945C3.65709 18.5673 2.84409 19.0652 2 19.0088C3.42052 21.4765 7.01349 21.6791 8.72141 19.4547C9.65433 18.2397 10.1231 16.4377 8.8504 15.1651Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9.48438 11C10.1624 9.24803 11.4511 7.79138 13.1227 6.90642L20.3927 3.05761C20.8069 2.83833 21.2552 3.28669 21.036 3.70089L17.1872 10.9709C16.2865 12.6721 14.7937 13.9768 13.0002 14.6447"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pipaintbrushduostroke;
