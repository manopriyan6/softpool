
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Package, DollarSign, Users, ShoppingCart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import OrdersManagement from "@/components/admin/OrdersManagement";
import ProductsManagement from "@/components/admin/ProductsManagement";

const AdminDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    totalCustomers: 0,
  });

  useEffect(() => {
    // In a real app, you would fetch this data from your API
    setStats({
      totalOrders: 24,
      totalRevenue: 72485,
      totalProducts: 6,
      totalCustomers: 18,
    });
  }, []);

  // Redirect if not logged in or not an admin
  if (!user) {
    return <Navigate to="/login?redirect=/admin" />;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your products, view orders, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Total Orders</p>
                <h3 className="text-2xl font-bold">{stats.totalOrders}</h3>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Total Revenue</p>
                <h3 className="text-2xl font-bold">₹{stats.totalRevenue.toLocaleString()}</h3>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Total Products</p>
                <h3 className="text-2xl font-bold">{stats.totalProducts}</h3>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Total Customers</p>
                <h3 className="text-2xl font-bold">{stats.totalCustomers}</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="products">
          <TabsList className="mb-6">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products">
            <ProductsManagement />
          </TabsContent>
          
          <TabsContent value="orders">
            <OrdersManagement />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
