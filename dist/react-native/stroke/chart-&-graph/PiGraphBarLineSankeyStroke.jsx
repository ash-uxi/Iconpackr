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
 * Pigraphbarlinesankeystroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphbarlinesankeystroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph bar line sankey icon",
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
      d="M21 21H7C5.13616 21 3.57006 19.7252 3.12602 18M3 3V6M21 6H3M21 17H19.2815C16.6066 17 14.1088 15.6632 12.6251 13.4376L12.5294 13.2941M21 10H19C16.4819 10 14.1108 11.1856 12.6 13.2L12.5294 13.2941M3 6V8M3 8H4.71853C7.39336 8 9.89121 9.33681 11.3749 11.5624L12.5294 13.2941M3 8V17C3 17.3453 3.04375 17.6804 3.12602 18M12.5294 13.2941L11.4 14.8C9.88916 16.8144 7.51806 18 5 18H3.12602"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigraphbarlinesankeystroke;
