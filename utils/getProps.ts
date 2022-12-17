export const getClasses = (className?: string): string => {
  return className ? className : "";
};

export const getStyle = (style?: React.CSSProperties): React.CSSProperties => {
  return style ? style : {};
};
