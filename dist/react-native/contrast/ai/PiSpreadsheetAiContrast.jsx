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
 * Pispreadsheetaicontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pispreadsheetaicontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "spreadsheet ai icon",
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
    <path d="M14 21zM18 14c-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.384 3 3 .637-1.616 1.34-2.345 3-3-1.66-.655-2.363-1.383-3-3M9 9v6m0-6H3m6 0h12c-.002-1.977-.027-3.013-.436-3.816a4 4 0 0 0-1.748-1.748C17.96 3 16.84 3 14.6 3H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3.026 5.987 3.002 7.024 3 9m6 6v6c-1.977-.002-3.013-.027-3.816-.436a4 4 0 0 1-1.748-1.748c-.41-.803-.434-1.84-.436-3.816m6 0H3m0 0V9" />
    <path
      fill={color}
      d="M9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.41.803.434 1.84.436 3.816H9v12c-1.977-.002-3.013-.027-3.816-.436a4 4 0 0 1-1.748-1.748c-.41-.803-.434-1.84-.436-3.816V9c.002-1.977.027-3.013.436-3.816a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3"
      opacity={0.28}
    />
  </Svg>
);

export default Pispreadsheetaicontrast;
