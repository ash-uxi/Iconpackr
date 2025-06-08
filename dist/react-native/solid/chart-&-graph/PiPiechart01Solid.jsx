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
 * Pipiechart01solid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipiechart01solid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "piechart01 icon",
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
      d="M11.0437 4.26908C11.0437 3.01569 12.0969 1.80706 13.5438 2.02392C17.8907 2.67546 21.3245 6.10919 21.976 10.4562C22.1929 11.903 20.9842 12.9562 19.7308 12.9562H13.4002C12.0988 12.9562 11.0437 11.9011 11.0437 10.5997V4.26908Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M7.26315 3.12123C8.30908 2.5542 9.42622 3.38327 9.42622 4.42914V10.5737C9.42622 12.7828 11.2171 14.5737 13.4262 14.5737H19.5708C20.6166 14.5737 21.4457 15.6908 20.8787 16.7368C19.1805 19.8692 15.8617 21.9999 12.0437 21.9999C6.49672 21.9999 2 17.5032 2 11.9562C2 8.13824 4.1307 4.81939 7.26315 3.12123Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pipiechart01solid;
