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
 * Pifaceoldduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifaceoldduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "face old icon",
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
      d="M10.4278 8.55691C10.7446 9.00932 10.6347 9.63286 10.1823 9.94964L8.95354 10.81C8.50114 11.1268 7.87759 11.0168 7.56082 10.5644C7.24404 10.112 7.35399 9.48848 7.80639 9.1717L9.03512 8.31133C9.48753 7.99456 10.1111 8.10451 10.4278 8.55691Z"
      fill={color || "#000"}
    />{" "}
    <path
      d="M12.0001 1.8501C6.39441 1.8501 1.8501 6.39441 1.8501 12.0001C1.8501 17.6058 6.39441 22.1501 12.0001 22.1501C17.6058 22.1501 22.1501 17.6058 22.1501 12.0001C22.1501 6.39441 17.6058 1.8501 12.0001 1.8501Z"
      fill={color || "#000"}
      opacity={0.28}
    />{" "}
    <path
      d="M13.5808 8.55688C13.8976 8.10448 14.5211 7.99453 14.9735 8.3113L16.2022 9.17167C16.6546 9.48845 16.7646 10.112 16.4478 10.5644C16.131 11.0168 15.5075 11.1268 15.0551 10.81L13.8264 9.94961C13.374 9.63283 13.264 9.00929 13.5808 8.55688Z"
      fill={color || "#000"}
    />{" "}
    <path
      d="M9.14321 13.9C8.75659 13.5056 8.12346 13.4993 7.72907 13.8859C7.33468 14.2725 7.32839 14.9057 7.71501 15.3001C8.80281 16.4097 10.3216 17.1 11.9998 17.1C13.6781 17.1 15.1969 16.4097 16.2846 15.3001C16.6713 14.9057 16.665 14.2725 16.2706 13.8859C15.8762 13.4993 15.2431 13.5056 14.8564 13.9C14.1293 14.6417 13.119 15.1 11.9998 15.1C10.8807 15.1 9.87035 14.6417 9.14321 13.9Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Pifaceoldduosolid;
