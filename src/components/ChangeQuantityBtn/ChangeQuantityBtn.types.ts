export interface ChangeQuantityBtnProps { 
  quantity: number;
  onIncreaseClick: () => void;
  onDecreaseClick: () => void; 
  className?: string;
}