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
 * Pifacebookduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifacebookduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "facebook icon",
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
      d="M11.026 22h-.065zM14.596 7h-.043c-.593 0-1.105 0-1.528.04-.448.041-.887.134-1.303.376-.62.36-1.1.922-1.394 1.58-.19.428-.264.877-.298 1.358-.032.447-.034.992-.034 1.646h-1.25a1 1 0 1 0 0 2h1.25v5.988c.545.01 1.198.012 2 .012v-6h2.75a1 1 0 1 0 0-2h-2.75c0-.672.002-1.139.028-1.503.027-.377.076-.563.13-.686.139-.309.347-.534.574-.667.065-.038.182-.085.483-.113C13.53 9 13.948 9 14.596 9a1 1 0 1 0 0-2"
      fill="none"
    />
    <path
      d="M3.354 7.22C3 8.23 3 9.485 3 12s0 3.77.354 4.78a6.3 6.3 0 0 0 3.865 3.866C8.23 21 9.486 21 12 21s3.77 0 4.78-.354a6.3 6.3 0 0 0 3.866-3.865C21 15.77 21 14.514 21 12s0-3.77-.354-4.78a6.3 6.3 0 0 0-3.865-3.866C15.77 3 14.514 3 12 3s-3.77 0-4.78.354a6.3 6.3 0 0 0-3.866 3.865"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pifacebookduostroke;
