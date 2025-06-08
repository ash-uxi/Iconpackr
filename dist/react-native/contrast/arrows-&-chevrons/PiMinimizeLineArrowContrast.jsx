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
 * Piminimizelinearrowcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piminimizelinearrowcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "minimize line arrow icon",
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
      fill={color}
      d="M11.47 13.09a20.7 20.7 0 0 1-.215 5.311l-2.613-3.043L5.6 12.744c1.767-.3 3.552-.372 5.31-.214a.616.616 0 0 1 .561.56"
      opacity={0.28}
    />
    <path d="M11.47 13.09a20.7 20.7 0 0 1-.215 5.311l-2.613-3.043L5.6 12.744c1.767-.3 3.552-.372 5.31-.214a.616.616 0 0 1 .561.56" />
    <path
      fill={color}
      d="M12.53 10.91a20.7 20.7 0 0 1 .215-5.311l1.424 1.659a24 24 0 0 0 2.573 2.573l1.66 1.425c-1.768.3-3.553.372-5.312.214a.62.62 0 0 1-.56-.56"
      opacity={0.28}
    />
    <path d="M12.53 10.91a20.7 20.7 0 0 1 .215-5.311l1.424 1.659a24 24 0 0 0 2.573 2.573l1.66 1.425c-1.768.3-3.553.372-5.312.214a.62.62 0 0 1-.56-.56M15.573 8.427 20 4M8.427 15.573 4 20" />
  </Svg>
);

export default Piminimizelinearrowcontrast;
