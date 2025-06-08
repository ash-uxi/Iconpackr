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
 * Pipresentationtrendlineupduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipresentationtrendlineupduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "presentation trendline up icon",
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
      d="M12 3H8.4C6.15979 3 5.03968 3 4.18404 3.43597C3.43139 3.81947 2.81947 4.43139 2.43597 5.18404C2 6.03968 2 7.15979 2 9.4V11.6C2 13.8402 2 14.9603 2.43597 15.816C2.81947 16.5686 3.43139 17.1805 4.18404 17.564C5.03968 18 6.15979 18 8.4 18H15.6C17.8402 18 18.9603 18 19.816 17.564C20.5686 17.1805 21.1805 16.5686 21.564 15.816C22 14.9603 22 13.8402 22 11.6V9.4C22 7.15979 22 6.03968 21.564 5.18404C21.1805 4.43139 20.5686 3.81947 19.816 3.43597C18.9603 3 17.8402 3 15.6 3H12ZM12 3V2M6 22L8 18M18 22L16 18"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M7 13.5C7.72571 11.5696 9.06199 9.9534 10.7891 8.91717L11.0377 8.76795L12.9623 12.2321L13.2109 12.0828C14.938 11.0466 16.2743 9.43037 17 7.5"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipresentationtrendlineupduostroke;
