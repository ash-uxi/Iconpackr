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
 * Pibotsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibotsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bot icon",
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
      d="M13.0001 2C13.0001 1.44772 12.5524 1 12.0001 1C11.4478 1 11.0001 1.44772 11.0001 2V6L9.8005 5.99996C8.1315 5.99952 7.05211 5.99924 6.14597 6.29366C4.31934 6.88717 2.88724 8.31927 2.29373 10.1459C1.9993 11.052 1.99959 12.1314 2.00003 13.8004V14.1996C1.99959 15.8686 1.9993 16.948 2.29373 17.8541C2.88724 19.6807 4.31934 21.1128 6.14597 21.7063C7.05211 22.0008 8.13149 22.0005 9.80048 22H14.1997C15.8686 22.0005 16.948 22.0008 17.8542 21.7063C19.6808 21.1128 21.1129 19.6807 21.7064 17.8541C22.0008 16.948 22.0005 15.8686 22.0001 14.1996V13.8004C22.0005 12.1314 22.0008 11.052 21.7064 10.1459C21.1129 8.31927 19.6808 6.88717 17.8542 6.29366C16.948 5.99924 15.8686 5.99952 14.1996 5.99996L13.0001 6V2ZM6.9 13C6.9 11.8402 7.8402 10.9 9 10.9C10.1598 10.9 11.1 11.8402 11.1 13C11.1 14.1598 10.1598 15.1 9 15.1C7.8402 15.1 6.9 14.1598 6.9 13ZM12.9 13C12.9 11.8402 13.8402 10.9 15 10.9C16.1598 10.9 17.1 11.8402 17.1 13C17.1 14.1598 16.1598 15.1 15 15.1C13.8402 15.1 12.9 14.1598 12.9 13Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pibotsolid;
