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
 * Pimastodonstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimastodonstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mastodon icon",
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
      d="M12 11.3126V8.38664M12 8.38664C12 7.12864 11.105 6.10864 10 6.10864C8.895 6.10864 8 7.12864 8 8.38664V13.1086M12 8.38664C12 7.12864 12.895 6.10864 14 6.10864C15.105 6.10864 16 7.12864 16 8.38664V13.1086M18.8326 15.3443C19.7534 14.4501 20.2221 13.3833 20.2221 10.263C20.2221 7.14269 20.1985 6.03373 18.8326 4.47358C16.5852 1.90479 7.41494 1.90353 5.16737 4.47256C3.80147 6.03271 3.77783 7.14166 3.77783 10.262L3.80455 11.448C3.8765 24.699 15.8531 21.3649 17.8521 19.296C14.2949 19.5411 11.7111 19.1821 10.0997 18.2189C9.37603 17.7863 9.86913 16.9487 10.7087 17.0249C13.5647 17.2839 17.0129 17.1108 18.8326 15.3443Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimastodonstroke;
