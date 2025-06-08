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
 * Pigraphbarlinesankeyduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphbarlinesankeyduostroke = ({
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
      d="M21 21H7C4.79086 21 3 19.2091 3 17V3"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M21 6H6M21 17H19.2815C16.6066 17 14.1088 15.6632 12.6251 13.4376L12.5294 13.2941M21 10H19C16.4819 10 14.1108 11.1856 12.6 13.2L12.5294 13.2941M12.5294 13.2941L11.4 14.8C10.1939 16.4081 8.43963 17.488 6.5 17.8582M12.5294 13.2941L11.3749 11.5624C10.1314 9.69707 8.17544 8.45607 6 8.10318"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigraphbarlinesankeyduostroke;
