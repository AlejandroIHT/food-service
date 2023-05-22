export interface DropdownProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseClick: () => void;
  onGoToCheckoutClick: () => void;
}