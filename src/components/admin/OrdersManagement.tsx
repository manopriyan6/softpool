
import { useState, useEffect } from "react";
import { Check, X, ExternalLink } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Order = {
  id: string;
  customer: string;
  email: string;
  date: string;
  amount: number;
  status: "completed" | "pending" | "cancelled";
  products: { name: string; quantity: number }[];
};

const OrdersManagement = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  
  useEffect(() => {
    // In a real app, you would fetch this data from your API
    setOrders([
      {
        id: "ORD-001",
        customer: "John Doe",
        email: "john@example.com",
        date: "2025-04-13",
        amount: 3999,
        status: "completed",
        products: [{ name: "SoftPool UI Design Kit", quantity: 1 }]
      },
      {
        id: "ORD-002",
        customer: "Jane Smith",
        email: "jane@example.com",
        date: "2025-04-12",
        amount: 2499,
        status: "pending",
        products: [{ name: "SoftPool Business Plan Template", quantity: 1 }]
      },
      {
        id: "ORD-003",
        customer: "Mike Johnson",
        email: "mike@example.com",
        date: "2025-04-11",
        amount: 5998,
        status: "completed",
        products: [
          { name: "E-commerce Website Template", quantity: 1 },
          { name: "Content Calendar Template", quantity: 1 }
        ]
      },
      {
        id: "ORD-004",
        customer: "Sarah Williams",
        email: "sarah@example.com",
        date: "2025-04-10",
        amount: 1499,
        status: "cancelled",
        products: [{ name: "Social Media Marketing Guide", quantity: 1 }]
      }
    ]);
  }, []);
  
  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "pending":
        return <Badge variant="outline">Pending</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <div>{order.customer}</div>
                      <div className="text-sm text-muted-foreground">{order.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {order.products.map((product, index) => (
                      <div key={index} className="text-sm">
                        {product.name} x{product.quantity}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>₹{order.amount.toLocaleString()}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">View details</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  );
};

export default OrdersManagement;
