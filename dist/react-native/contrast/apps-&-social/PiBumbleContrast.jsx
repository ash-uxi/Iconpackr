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
 * Pibumblecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibumblecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bumble icon",
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
      d="M15.432 3H8.734c-.673 0-1.01 0-1.31.098a2 2 0 0 0-.72.416c-.236.212-.404.503-.741 1.086l-3.349 5.8c-.336.583-.504.874-.57 1.184a2 2 0 0 0 0 .832c.066.31.234.601.57 1.184l3.349 5.8c.337.583.505.874.74 1.086a2 2 0 0 0 .72.416c.302.098.638.098 1.311.098h6.698c.673 0 1.01 0 1.31-.098a2 2 0 0 0 .72-.416c.236-.212.404-.503.74-1.086l3.35-5.8c.336-.583.504-.874.57-1.184a2 2 0 0 0 0-.832c-.066-.31-.234-.601-.57-1.184l-3.35-5.8c-.336-.583-.504-.874-.74-1.086a2 2 0 0 0-.72-.416C16.442 3 16.105 3 15.432 3"
      opacity={0.28}
    />
    <path d="M7.083 12h10m-7 4.045h4M9.083 8h6M2.614 13.6l3.349 5.8c.337.583.505.874.74 1.086a2 2 0 0 0 .72.416c.302.098.638.098 1.311.098h6.698c.673 0 1.01 0 1.31-.098a2 2 0 0 0 .72-.416c.236-.212.404-.503.74-1.086l3.35-5.8c.336-.583.504-.874.57-1.184a2 2 0 0 0 0-.832c-.066-.31-.234-.601-.57-1.184l-3.35-5.8c-.336-.583-.504-.874-.74-1.086a2 2 0 0 0-.72-.416C16.442 3 16.105 3 15.432 3H8.734c-.673 0-1.01 0-1.31.098a2 2 0 0 0-.72.416c-.236.212-.404.503-.741 1.086l-3.349 5.8c-.336.583-.504.874-.57 1.184a2 2 0 0 0 0 .832c.066.31.234.601.57 1.184" />
  </Svg>
);

export default Pibumblecontrast;
