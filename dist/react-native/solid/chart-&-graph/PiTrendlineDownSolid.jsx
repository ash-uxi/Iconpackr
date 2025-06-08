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
 * Pitrendlinedownsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitrendlinedownsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "trendline down icon",
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
      d="M2.7894 6.53405C2.45033 6.09811 1.82205 6.01957 1.38611 6.35864C0.950158 6.69771 0.871624 7.32599 1.21069 7.76194L1.93987 8.69945C3.82206 11.1194 6.17367 13.1343 8.85362 14.6231C9.62581 15.0521 10.598 14.8164 11.088 14.0814L14.0832 9.58863C15.5251 10.7578 16.7843 12.1282 17.8244 13.6535C17.5085 13.8195 17.1887 13.9782 16.8651 14.1292L15.5906 14.7242C15.2332 14.8911 15.0072 15.2525 15.0138 15.6469C15.0203 16.0413 15.258 16.395 15.6208 16.55C17.0937 17.1791 18.6424 17.6118 20.2269 17.8372C20.9 17.933 21.551 17.5571 21.8046 16.9264C22.4016 15.4414 22.8013 13.8839 22.9929 12.2937C23.04 11.9021 22.8526 11.5193 22.5143 11.3165C22.176 11.1136 21.75 11.1286 21.4268 11.3547L20.2743 12.1609C20.0378 12.3264 19.7983 12.4872 19.5558 12.6434C18.3125 10.7936 16.7792 9.14682 15.0083 7.76947C14.2557 7.18413 13.1644 7.36122 12.6356 8.15451L9.58062 12.7369C7.23739 11.3934 5.17798 9.60508 3.51857 7.47156L2.7894 6.53405Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pitrendlinedownsolid;
