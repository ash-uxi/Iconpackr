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
 * Pitrackpadsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitrackpadsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "trackpad icon",
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
      d="M11 14V22H8.40039C7.29681 22 6.40857 22.001 5.69141 21.9424C5.05359 21.8903 4.48344 21.7877 3.9541 21.5605L3.73047 21.4551C2.78966 20.9757 2.02429 20.2103 1.54492 19.2695C1.24327 18.6773 1.11716 18.0373 1.05762 17.3086C0.999028 16.5914 1 15.7032 1 14.5996V14H11ZM23 14.5996C23 15.7032 23.001 16.5914 22.9424 17.3086C22.8903 17.9464 22.7877 18.5166 22.5605 19.0459L22.4551 19.2695C21.9757 20.2103 21.2103 20.9757 20.2695 21.4551C19.6773 21.7567 19.0373 21.8828 18.3086 21.9424C17.5914 22.001 16.7032 22 15.5996 22H13V14H23V14.5996ZM15.5996 2C16.7032 2 17.5914 1.99903 18.3086 2.05762C19.0373 2.11716 19.6773 2.24327 20.2695 2.54492C21.2103 3.02429 21.9757 3.78966 22.4551 4.73047L22.5605 4.9541C22.7877 5.48344 22.8903 6.05359 22.9424 6.69141C23.001 7.40857 23 8.29681 23 9.40039V12H1V9.40039C1 8.29681 0.999028 7.40857 1.05762 6.69141C1.11716 5.9627 1.24327 5.32266 1.54492 4.73047C2.02429 3.78966 2.78966 3.02429 3.73047 2.54492C4.32266 2.24327 4.9627 2.11716 5.69141 2.05762C6.40857 1.99903 7.29681 2 8.40039 2H15.5996Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pitrackpadsolid;
