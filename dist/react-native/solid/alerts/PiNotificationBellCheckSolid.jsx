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
 * Pinotificationbellchecksolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinotificationbellchecksolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "notification bell check icon",
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
      d="M12.0005 2C7.73203 2 4.17613 5.2719 3.82165 9.52563L3.46665 13.7856C3.43551 14.1593 3.31676 14.5205 3.14641 15.0315C2.62544 16.5944 3.67849 18.2394 5.31544 18.4213C6.27278 18.5276 7.23206 18.6111 8.19244 18.6716C8.44352 20.5507 10.0528 22 12.0005 22C13.9483 22 15.5576 20.5506 15.8086 18.6714C16.7687 18.6109 17.7277 18.5274 18.6848 18.421C20.3205 18.2392 21.3729 16.5965 20.8543 15.0345C20.6844 14.5228 20.5657 14.1618 20.5345 13.788L20.1793 9.52563C19.8249 5.2719 16.269 2 12.0005 2ZM12.0005 20C11.1964 20 10.5126 19.4848 10.2613 18.7665C11.3225 18.797 12.3844 18.7995 13.4457 18.7742C13.5437 18.7718 13.6417 18.7692 13.7397 18.7664C13.4884 19.4848 12.8046 20 12.0005 20ZM15.5638 9.82581C14.0597 10.853 12.8083 12.2081 11.9042 13.7891C11.7495 14.0595 11.4777 14.2425 11.1689 14.2838C10.8602 14.3252 10.5498 14.2203 10.3294 14.0002L8.29315 11.9662C7.90242 11.5759 7.90208 10.9427 8.29239 10.552C8.6827 10.1612 9.31587 10.1609 9.7066 10.5512L10.8611 11.7044C11.8286 10.325 13.0388 9.12828 14.4359 8.17419C14.892 7.86273 15.5142 7.97997 15.8257 8.43606C16.1371 8.89214 16.0199 9.51436 15.5638 9.82581Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pinotificationbellchecksolid;
