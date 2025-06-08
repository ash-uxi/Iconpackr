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
 * Pilock02openduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilock02openduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "lock02 open icon",
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
      d="M17.5 2A5.5 5.5 0 0 0 12 7.5v1.502c.476.003.891.013 1.252.042q.387.03.748.106V7.5a3.5 3.5 0 1 1 7 0V10a1 1 0 1 0 2 0V7.5A5.5 5.5 0 0 0 17.5 2"
      fill="none"
    />
    <path
      d="M3 14.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 10 6.12 10 7.8 10h3.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C16 12.28 16 13.12 16 14.8v1.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C13.72 21 12.88 21 11.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2z"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pilock02openduostroke;
