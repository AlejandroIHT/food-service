export interface DropdownProps {
  children: React.ReactNode;
  title: string;
  totalCost: string;
  className?: string;
  goToCheckoutDisabled?: boolean;
  onCloseClick: () => void;
  onGoToCheckoutClick: () => void;
}