import type { StackPanelProps } from "./StackPanel.types";

const StackPanel = ({ children, ...rest }: StackPanelProps): JSX.Element => (
  <div style={rest}>{children}</div>
);

export default StackPanel;
