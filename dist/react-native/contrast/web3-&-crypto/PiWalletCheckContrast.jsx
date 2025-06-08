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
 * Piwalletcheckcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwalletcheckcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "wallet check icon",
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
    <path d="M2 14.5V11c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 3.545C5.8 3 7.2 3 10 3h3.5c1.398 0 2.097 0 2.648.228a3 3 0 0 1 1.624 1.624c.207.5.226 1.123.228 2.28M2 14.5c0 1.33 0 2.495.38 3.413a5 5 0 0 0 2.707 2.706C6.005 21 7.17 21 9.5 21h2.83M2 14.5c0-2.33 0-3.495.38-4.413A5 5 0 0 1 5.088 7.38C6.005 7 7.17 7 9.5 7h5c1.634 0 2.695 0 3.5.131M14 12h3m1-4.869c.343.056.639.136.913.25a5 5 0 0 1 2.706 2.706c.252.608.337 1.323.366 2.413m-6.275 6.368L17.845 21A13.7 13.7 0 0 1 22 16.5" />
    <path
      fill={color}
      d="M2.38 10.087C2 11.005 2 12.17 2 14.5c0 1.33 0 2.495.38 3.413a5 5 0 0 0 2.707 2.706C6.005 21 7.17 21 9.5 21h3.709v-.475a3.001 3.001 0 0 1 4.28-4.074 16.7 16.7 0 0 1 2.819-2.428 3 3 0 0 1 1.69-.523c-.007-1.684-.057-2.637-.379-3.413a5 5 0 0 0-2.706-2.706A4 4 0 0 0 18 7.13C17.195 7 16.134 7 14.5 7h-5c-2.33 0-3.495 0-4.413.38a5 5 0 0 0-2.706 2.707"
      opacity={0.28}
    />
  </Svg>
);

export default Piwalletcheckcontrast;
