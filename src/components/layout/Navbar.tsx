
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, User, LogOut, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const itemCount = state.items.reduce((count, item) => count + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/40">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/4404e196-ff12-4c8b-a77f-72de16da7e45.png" 
            alt="Logo" 
            className="h-10 w-auto"
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
            Products
          </Link>
          {user?.isAdmin && (
            <Link to="/admin" className="text-sm font-medium hover:text-primary transition-colors">
              Admin
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                {user.isAdmin && (
                  <DropdownMenuItem asChild>
                    <Link to="/admin" className="flex items-center gap-2 cursor-pointer">
                      <Package className="h-4 w-4" />
                      <span>Admin Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 cursor-pointer">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
          )}
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-background border-t border-border/40">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            {user?.isAdmin && (
              <Link 
                to="/admin" 
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            )}
            {!user ? (
              <Link 
                to="/login" 
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            ) : (
              <button 
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }} 
                className="text-sm font-medium py-2 text-left hover:text-primary transition-colors"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
