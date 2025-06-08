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
 * Pipointercursordefaultcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipointercursordefaultcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pointer cursor default icon",
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
      d="M3.823 10.172c-.698-2.793-1.047-4.189-.666-5.162A3.27 3.27 0 0 1 5.01 3.157c.973-.381 2.37-.032 5.162.666l5.344 1.336c2.382.595 3.573.893 4.056 1.223a3.272 3.272 0 0 1 .196 5.261c-.458.365-1.623.75-3.954 1.52-.419.14-.628.208-.817.3a3.27 3.27 0 0 0-1.535 1.534c-.09.189-.16.398-.298.817-.771 2.33-1.156 3.497-1.52 3.954a3.272 3.272 0 0 1-5.262-.196c-.33-.483-.628-1.674-1.223-4.056z"
      opacity={0.28}
    />
    <path d="M3.823 10.172c-.698-2.793-1.047-4.189-.666-5.162A3.27 3.27 0 0 1 5.01 3.157c.973-.381 2.37-.032 5.162.666l5.344 1.336c2.382.595 3.573.893 4.056 1.223a3.272 3.272 0 0 1 .196 5.261c-.458.365-1.623.75-3.954 1.52-.419.14-.628.208-.817.3a3.27 3.27 0 0 0-1.535 1.534c-.09.189-.16.398-.298.817-.771 2.33-1.156 3.497-1.52 3.954a3.272 3.272 0 0 1-5.262-.196c-.33-.483-.628-1.674-1.223-4.056z" />
  </Svg>
);

export default Pipointercursordefaultcontrast;
