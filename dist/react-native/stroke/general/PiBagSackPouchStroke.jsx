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
 * Pibagsackpouchstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibagsackpouchstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bag sack pouch icon",
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
      d="M14.8866 6.98758C14.3006 6.79509 13.6819 6.69011 13.0363 6.69011H10.9634C10.6415 6.69011 10.3262 6.71622 10.0184 6.76626M14.8866 6.98758C21.0716 9.01901 23.6216 20.7963 15.8087 21.7648C13.2792 22.0784 10.7206 22.0784 8.19104 21.7648C0.00710869 20.7503 3.19384 7.87572 10.0184 6.76626M14.8866 6.98758L16.664 2.54428L16.014 2.28428C14.7988 1.79821 13.4222 1.94155 12.3332 2.66753C11.4562 3.25225 10.3828 3.4646 9.34912 3.25787L8.37229 3.06251L10.0184 6.76626"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibagsackpouchstroke;
