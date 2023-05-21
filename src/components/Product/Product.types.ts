export interface ProductProps {
  name: string;
  price: string;
  type: string;
  img: string;
  buttonText: string;
  onAddToCart: () => void;
  buttonDisabled?: boolean;
  className?: string;
}
