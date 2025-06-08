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
 * Pinotificationbelloffduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinotificationbelloffduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "notification bell off icon",
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
    <g opacity={0.35}>
      <path
        d="M12.0005 2C7.73203 2 4.17613 5.2719 3.82165 9.52563L3.46665 13.7856C3.43551 14.1593 3.31676 14.5205 3.14641 15.0315C2.62544 16.5944 3.67849 18.2394 5.31544 18.4213C5.66778 18.4604 6.02038 18.4965 6.37321 18.5294C6.66955 18.5571 6.96281 18.4513 7.17327 18.2408L18.6211 6.79303C18.9638 6.45028 19.0114 5.91105 18.734 5.51356C17.2461 3.38195 14.7741 2 12.0005 2Z"
        fill={color || "#000"}
      />
      <path
        d="M20.195 9.71312C20.1626 9.32508 19.908 8.99111 19.5424 8.85718C19.1768 8.72325 18.7666 8.81372 18.4913 9.08906L8.78748 18.7929C8.47557 19.1048 8.40487 19.5842 8.61347 19.9729C9.25991 21.1774 10.5334 22 12.0005 22C13.9483 22 15.5576 20.5506 15.8086 18.6714C16.7687 18.6109 17.7277 18.5274 18.6848 18.421C20.3205 18.2392 21.3729 16.5965 20.8543 15.0345C20.6844 14.5228 20.5657 14.1618 20.5345 13.788L20.195 9.71312ZM11.6186 18.7902C12.3257 18.7947 13.0328 18.7867 13.7397 18.7664C13.4884 19.4848 12.8046 20 12.0005 20C11.5561 20 11.1479 19.8428 10.829 19.5798L11.6186 18.7902Z"
        fill={color || "#000"}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </g>
  </Svg>
);

export default Pinotificationbelloffduosolid;
