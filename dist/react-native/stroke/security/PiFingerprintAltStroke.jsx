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
 * Pifingerprintaltstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifingerprintaltstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "fingerprint alt icon",
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
      d="M17.5 3.64702C15.9221 2.60596 14.0318 2 12 2C9.96818 2 8.0779 2.60596 6.5 3.64702M17 20.6622C15.5291 21.513 13.8214 22 12 22C10.1786 22 8.47087 21.513 7 20.6622"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M4 8.69214C6.00554 6.76092 8.84794 5.55566 12 5.55566C15.1521 5.55566 17.9945 6.76092 20 8.69214"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5.07107 17C4.1215 11.7389 7.79163 9 12.0002 9C14.2628 9 16.2747 10.0735 17.5543 11.7389C19.9833 14.9002 15.9406 18.174 13.5568 14.3412C12.458 12.5745 10.0624 12.7451 9.02995 13.8461C7.93422 15.0146 8.01507 17.9004 11.0002 18.5"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifingerprintaltstroke;
