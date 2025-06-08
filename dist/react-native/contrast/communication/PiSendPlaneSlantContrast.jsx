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
 * Pisendplaneslantcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisendplaneslantcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "send plane slant icon",
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
      d="m9.54 14.46-5.477-2.985c-1.429-.78-1.414-2.834.025-3.574a51.4 51.4 0 0 1 12.558-4.507c1.254-.274 2.687-.83 3.739.221 1.052 1.052.495 2.485.221 3.74A51.4 51.4 0 0 1 16.1 19.911c-.74 1.44-2.794 1.454-3.574.025z"
      opacity={0.28}
    />
    <path d="m9.54 14.46-5.477-2.985c-1.429-.78-1.414-2.834.025-3.574a51.4 51.4 0 0 1 12.558-4.507c1.254-.274 2.687-.83 3.739.221 1.052 1.052.495 2.485.221 3.74A51.4 51.4 0 0 1 16.1 19.911c-.74 1.44-2.794 1.454-3.574.025zm0 0 3.308-3.308" />
  </Svg>
);

export default Pisendplaneslantcontrast;
