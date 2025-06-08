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
 * Pipiechartringsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipiechartringsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "piechart ring icon",
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
      d="M11.9999 1.8501C7.15505 1.8501 3.10516 5.24356 2.09311 9.78237C2.02707 10.0785 2.09909 10.3887 2.28888 10.6254C2.47867 10.8622 2.7657 11 3.06914 11L7.41596 11C7.81343 11 8.17317 10.7646 8.33231 10.4004C8.95047 8.98556 10.3612 8 11.9999 8C12.6177 8 13.2001 8.13935 13.7199 8.3874C14.1023 8.56985 14.5581 8.49157 14.8577 8.19199L17.8864 5.16324C18.0965 4.9532 18.2023 4.66064 18.1752 4.36483C18.148 4.06903 17.9908 3.80059 17.7461 3.63224C16.112 2.50816 14.1313 1.8501 11.9999 1.8501Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M20.7675 6.8833C20.6111 6.61577 20.3394 6.43588 20.032 6.39628C19.7247 6.35667 19.4163 6.46183 19.1971 6.68097L16.069 9.80914C15.8064 10.0717 15.711 10.458 15.821 10.8126C15.937 11.1865 15.9999 11.585 15.9999 12C15.9999 13.6387 15.0144 15.0494 13.5995 15.6676C13.2353 15.8267 12.9999 16.1865 12.9999 16.584V20.9309C12.9999 21.2343 13.1377 21.5213 13.3745 21.7111C13.6112 21.9009 13.9214 21.9729 14.2175 21.9069C18.7564 20.8949 22.1499 16.845 22.1499 12.0001C22.1499 10.136 21.6465 8.38647 20.7675 6.8833Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M3.0691 13C2.76566 13 2.47863 13.1378 2.28884 13.3745C2.09905 13.6113 2.02703 13.9214 2.09306 14.2176C2.94615 18.0439 5.956 21.0538 9.78229 21.9069C10.0785 21.9729 10.3886 21.9009 10.6254 21.7111C10.8621 21.5213 10.9999 21.2343 10.9999 20.9309V16.584C10.9999 16.1865 10.7645 15.8267 10.4003 15.6676C9.47769 15.2645 8.73541 14.5222 8.33231 13.5996C8.17317 13.2354 7.81343 13 7.41596 13H3.0691Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pipiechartringsolid;
