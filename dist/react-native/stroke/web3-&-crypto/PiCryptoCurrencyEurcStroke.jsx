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
 * Picryptocurrencyeurcstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picryptocurrencyeurcstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "crypto currency eurc icon",
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
      d="M8.49963 20.4565C5.1828 19.0822 2.84961 15.8134 2.84961 11.9997C2.84961 8.186 5.1828 4.91723 8.49963 3.54297M15.4996 3.54297C18.8164 4.91723 21.1496 8.186 21.1496 11.9997C21.1496 15.8134 18.8164 19.0822 15.4996 20.4565M14.9158 7.78394C14.2072 7.28964 13.3454 6.99976 12.4158 6.99976C10.1352 6.99976 8.30034 8.77229 8.05347 10.9998M14.9158 16.2156C14.2072 16.7099 13.3454 16.9998 12.4158 16.9998C10.4799 16.9998 8.83771 15.7424 8.26127 13.9998M8.26127 13.9998H6.99951M8.26127 13.9998H10.9995M8.26127 13.9998C7.94744 13.051 7.94467 11.9814 8.05347 10.9998M6.99951 10.9998H8.05347M8.05347 10.9998H11.9995"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picryptocurrencyeurcstroke;
