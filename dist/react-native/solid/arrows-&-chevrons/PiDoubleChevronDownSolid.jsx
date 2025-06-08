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
 * Pidoublechevrondownsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidoublechevrondownsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "double chevron down icon",
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
      d="M8.07479 12.0028C7.68634 11.9737 7.31633 12.1728 7.12662 12.513C6.9369 12.8532 6.96201 13.2726 7.19097 13.5878C8.30456 15.1206 9.61063 16.4944 11.0751 17.6732C11.6164 18.1089 12.3836 18.1089 12.9249 17.6732C14.3894 16.4944 15.6955 15.1206 16.809 13.5878C17.038 13.2726 17.0631 12.8532 16.8734 12.513C16.6837 12.1728 16.3137 11.9737 15.9252 12.0028L13.7202 12.1682C12.575 12.2541 11.425 12.2541 10.2798 12.1682L8.07479 12.0028Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M8.07479 6.00281C7.68634 5.97368 7.31633 6.17277 7.12662 6.51299C6.9369 6.8532 6.96201 7.27263 7.19097 7.58778C8.30456 9.12058 9.61063 10.4944 11.0751 11.6732C11.6164 12.1089 12.3836 12.1089 12.9249 11.6732C14.3894 10.4944 15.6955 9.12058 16.809 7.58778C17.038 7.27263 17.0631 6.8532 16.8734 6.51299C16.6837 6.17277 16.3137 5.97368 15.9252 6.00281L13.7202 6.16819C12.575 6.25408 11.425 6.25408 10.2798 6.16819L8.07479 6.00281Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pidoublechevrondownsolid;
