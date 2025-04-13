
import { useState } from "react";
import { Edit, Trash2, Plus } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { products as initialProducts, Product } from "@/data/products";

const ProductsManagement = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<Product>>({});
  
  const handleAddProduct = () => {
    setIsEditMode(false);
    setCurrentProduct({
      id: `${Date.now()}`,
      title: "",
      description: "",
      price: 0,
      image: "/placeholder.svg",
      category: "Design",
      featured: false,
    });
    setIsDialogOpen(true);
  };
  
  const handleEditProduct = (product: Product) => {
    setIsEditMode(true);
    setCurrentProduct(product);
    setIsDialogOpen(true);
  };
  
  const handleDeleteProduct = (id: string) => {
    // In a real app, you would call your API to delete the product
    setProducts(products.filter(product => product.id !== id));
    toast.success("Product deleted successfully");
  };
  
  const handleSaveProduct = () => {
    if (!currentProduct.title || !currentProduct.description || currentProduct.price === undefined) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // In a real app, you would call your API to save the product
    if (isEditMode) {
      setProducts(products.map(product => 
        product.id === currentProduct.id ? currentProduct as Product : product
      ));
      toast.success("Product updated successfully");
    } else {
      setProducts([...products, currentProduct as Product]);
      toast.success("Product added successfully");
    }
    
    setIsDialogOpen(false);
  };
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Manage Products</h2>
        <Button onClick={handleAddProduct}>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>
      
      <Card>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="h-12 w-12 object-cover rounded-md"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{product.title}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>₹{product.price.toLocaleString()}</TableCell>
                  <TableCell>
                    {product.featured ? (
                      <Badge>Featured</Badge>
                    ) : (
                      <Badge variant="outline">Not Featured</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleEditProduct(product)}
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {isEditMode ? "Edit Product" : "Add New Product"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={currentProduct.title || ""}
                onChange={(e) => setCurrentProduct({ ...currentProduct, title: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                type="number"
                value={currentProduct.price || ""}
                onChange={(e) => setCurrentProduct({ ...currentProduct, price: Number(e.target.value) })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                value={currentProduct.category || ""}
                onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="featured" className="text-right">
                Featured
              </Label>
              <div className="col-span-3">
                <Input
                  id="featured"
                  type="checkbox"
                  checked={currentProduct.featured || false}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, featured: e.target.checked })}
                  className="h-4 w-4"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                value={currentProduct.description || ""}
                onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
                className="col-span-3"
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSaveProduct}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductsManagement;
