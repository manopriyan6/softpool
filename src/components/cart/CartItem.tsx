
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem = ({ product, quantity }: CartItemProps) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <div className="h-24 w-24 min-w-24 flex-shrink-0 rounded-md overflow-hidden bg-secondary/50">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="flex flex-col flex-grow gap-1">
        <div className="flex justify-between">
          <h3 className="font-medium">{product.title}</h3>
          <Button variant="ghost" size="icon" onClick={handleRemove}>
            <Trash2 className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-1 mb-auto">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-r-none"
              onClick={handleDecrease}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <div className="h-8 px-4 flex items-center justify-center border-y border-input">
              {quantity}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-l-none"
              onClick={handleIncrease}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="text-right">
            <p className="font-medium">${product.price.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">
              Subtotal: ${(product.price * quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
