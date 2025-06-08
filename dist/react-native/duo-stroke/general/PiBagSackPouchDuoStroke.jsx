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
 * Pibagsackpouchduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibagsackpouchduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bag sack pouch icon",
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
      d="M12.888 3.5a2.98 2.98 0 0 1 2.47-.385l-1.075 2.689q.47.086.916.234.509.167.983.404l1.41-3.526a1 1 0 0 0-.556-1.3l-.65-.26a4.97 4.97 0 0 0-4.607.48 2.97 2.97 0 0 1-2.233.441l-.977-.195a1 1 0 0 0-1.11 1.387l1.167 2.627a7 7 0 0 1 2.012-.398l-.606-1.364a4.97 4.97 0 0 0 2.856-.834"
      fill="none"
    />
    <path
      d="M8.191 21.764c2.53.314 5.088.314 7.618 0 7.813-.968 5.263-12.746-.922-14.777a5.9 5.9 0 0 0-1.85-.298h-2.074q-.482.001-.945.077C3.194 7.876.008 20.75 8.191 21.764"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pibagsackpouchduostroke;
