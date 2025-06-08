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
 * Piarrowbigdownrightduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigdownrightduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big down right icon",
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
      d="M9.19109 19.091C10.2408 18.2594 11.262 17.394 12.2532 16.4962L5.23632 9.47933C4.84031 9.08331 4.6423 8.8853 4.56811 8.65698C4.50285 8.45613 4.50285 8.23978 4.56811 8.03894C4.64229 7.81062 4.84032 7.61259 5.23632 7.21659L7.21622 5.23669C7.61222 4.84069 7.81025 4.64266 8.03858 4.56847C8.23942 4.50322 8.45576 4.50322 8.65661 4.56848C8.88494 4.64266 9.08295 4.84067 9.47896 5.23669L16.4958 12.2535C17.3936 11.2624 18.259 10.2412 19.0906 9.19146"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9.19128 19.0909C12.2098 19.5428 15.2674 19.6022 18.2877 19.2684C18.5468 19.2398 18.7777 19.1242 18.9509 18.951C19.1241 18.7778 19.2397 18.547 19.2683 18.2879C19.6021 15.2675 19.5427 12.2099 19.0908 9.19141"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowbigdownrightduostroke;
