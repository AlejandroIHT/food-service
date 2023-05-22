export interface ChangeQuantityBtnProps { 
  quantity: string;
  onIncreaseClick: () => void;
  onDecreaseClick: () => void; 
  className?: string;
}