export interface ProductProps {
  name: string;
  price: number;
  type: string;
  img: string;
  buttonText: string;
  onAddToCart: () => void;
  buttonDisabled?: boolean;
  className?: string;
}
