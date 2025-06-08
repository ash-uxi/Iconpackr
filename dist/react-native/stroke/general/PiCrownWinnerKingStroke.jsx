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
 * Picrownwinnerkingstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picrownwinnerkingstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "crown winner king icon",
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
      d="M19.2292 21.5C14.5681 19.7521 9.43167 19.7521 4.77063 21.5M19.9415 17.7073L22.4264 6.93967C22.5685 6.32372 21.8154 5.9063 21.3684 6.35329C18.8132 8.90852 14.4777 8.01863 13.1356 4.66345L12.3707 2.75112C12.2368 2.41629 11.7628 2.41629 11.6289 2.75112L10.864 4.66345C9.52189 8.01863 5.18646 8.90852 2.63123 6.35329C2.18424 5.9063 1.4311 6.32372 1.57324 6.93967L4.05808 17.7073C9.17847 15.7871 14.8211 15.7871 19.9415 17.7073Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picrownwinnerkingstroke;
