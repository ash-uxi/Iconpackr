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
 * Pifaceidsadstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifaceidsadstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "face id sad icon",
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
      d="M7.5 8.18799V9.68799M16.5 8.18799V9.68799M10.5 12.7881C11.3 12.7881 12 12.0881 12 11.2881V8.48095M15.209 17.3599C13.409 15.5599 10.509 15.5599 8.70896 17.3599M15 3.18799C16.9768 3.18953 18.0129 3.21474 18.8161 3.62396C19.5687 4.00746 20.1806 4.61938 20.5641 5.37203C20.9733 6.17516 20.9985 7.21129 21 9.18799M15 21.188C16.9768 21.1864 18.0129 21.1612 18.8161 20.752C19.5687 20.3685 20.1806 19.7566 20.5641 19.004C20.9733 18.2008 20.9985 17.1647 21 15.188M9 21.188C7.02324 21.1864 5.98709 21.1612 5.18394 20.752C4.43129 20.3685 3.81937 19.7566 3.43588 19.004C3.02666 18.2008 3.00154 17.1647 3 15.188M3 9.18799C3.00154 7.21129 3.02593 6.17516 3.43514 5.37203C3.81864 4.61938 4.43056 4.00746 5.18321 3.62396C5.98645 3.21469 7.02276 3.18962 9 3.18809"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifaceidsadstroke;
