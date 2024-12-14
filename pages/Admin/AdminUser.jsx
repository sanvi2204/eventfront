// import { useState } from 'react'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"

// import { Plus } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet"

// const AdminUser = () => {
//   const [open, setOpen] = useState(false)
//   const [invoices, setInvoices] = useState([
//     { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
//     { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
//     { invoice: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
//     { invoice: "INV004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
//     { invoice: "INV005", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
//     { invoice: "INV006", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
//     { invoice: "INV007", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
//   ])

//   const [newInvoice, setNewInvoice] = useState({
//     invoice: "",
//     paymentStatus: "",
//     totalAmount: "",
//     paymentMethod: "",
//   })

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setNewInvoice((prev) => ({ ...prev, [name]: value }))
//   }

//   const addInvoice = () => {
//     if (newInvoice.invoice && newInvoice.paymentStatus && newInvoice.totalAmount && newInvoice.paymentMethod) {
//       setInvoices([...invoices, newInvoice])
//       setNewInvoice({ invoice: "", paymentStatus: "", totalAmount: "", paymentMethod: "" }) // Reset form
//       setOpen(false) // Close the Sheet
//     }
//   }

//   return (
//     <>
//       <Card>
//         <CardHeader className='w-full flex flex-row justify-between items-center'>
//           <CardTitle>Users</CardTitle>
//           <Button onClick={() => setOpen(!open)}>
//             <Plus className='h-5 w-5 mr-2' /> Add
//           </Button>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="w-[0-px]">Invoice</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Method</TableHead>
//                 <TableHead className="text-right">Amount</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {invoices.map((invoice) => (
//                 <TableRow key={invoice.invoice}>
//                   <TableCell className="font-medium">{invoice.invoice}</TableCell>
//                   <TableCell>{invoice.paymentStatus}</TableCell>
//                   <TableCell>{invoice.paymentMethod}</TableCell>
//                   <TableCell className="text-right">{invoice.totalAmount}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       <Sheet open={open}>
//         <SheetContent>
//           <SheetHeader>
//             <SheetTitle>Add New Invoice</SheetTitle>
//             <SheetDescription>
//               Enter details for the new invoice. Click save to add it.
//             </SheetDescription>
//           </SheetHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="invoice" className="text-right">Invoice</Label>
//               <Input id="invoice" name="invoice" value={newInvoice.invoice} onChange={handleInputChange} className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="paymentStatus" className="text-right">Status</Label>
//               <Input id="paymentStatus" name="paymentStatus" value={newInvoice.paymentStatus} onChange={handleInputChange} className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="totalAmount" className="text-right">Amount</Label>
//               <Input id="totalAmount" name="totalAmount" value={newInvoice.totalAmount} onChange={handleInputChange} className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="paymentMethod" className="text-right">Method</Label>
//               <Input id="paymentMethod" name="paymentMethod" value={newInvoice.paymentMethod} onChange={handleInputChange} className="col-span-3" />
//             </div>
//           </div>
//           <SheetFooter className='flex flex-col flex-1'>
//             <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={() => setOpen(!open)}>Cancel</Button>
//             <Button type="submit" className='w-1/2' onClick={addInvoice}>Save changes</Button>
//           </SheetFooter>
//         </SheetContent>
//       </Sheet>
//     </>
//   )
// }

// export default AdminUser
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const AdminUser = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([
    {
      userID: "USR001",
      name: "John Doe",
      email: "johndoe@example.com",
      status: "Active",
      role: "Admin",
    },
    {
      userID: "USR002",
      name: "Jane Smith",
      email: "janesmith@example.com",
      status: "Inactive",
      role: "User",
    },
  ]);

  const [newUser, setNewUser] = useState({
    userID: '',
    name: '',
    email: '',
    status: '',
    role: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleAddUser = () => {
    const newUserID = `USR${(users.length + 1).toString().padStart(3, '0')}`;
    setUsers([...users, { ...newUser, userID: newUserID }]);
    setNewUser({
      userID: '',
      name: '',
      email: '',
      status: '',
      role: '',
    });
    setOpen(false);
  };

  return (
    <div style={styles.outerContainer}>
      <Card style={styles.tableCard}>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Users</CardTitle>
          <Button onClick={() => setOpen(!open)} style={styles.addButton}>
            <Plus className='h-5 w-5 mr-2' /> Add User
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">User ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.userID}>
                  <TableCell className="font-medium">{user.userID}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add New User</SheetTitle>
            <SheetDescription>
              Fill in the user details and click "Save" to add a new user.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Input
                id="status"
                name="status"
                value={newUser.status}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Input
                id="role"
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={() => setOpen(!open)}>
              Cancel
            </Button>
            <Button type="submit" className='w-1/2' onClick={handleAddUser}>
              Save changes
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const styles = {
  outerContainer: {
    display: "flex",
    alignItems: "flex-start", // Aligns table to the top
    justifyContent: "center",
    paddingTop: "5vh", // Adds a little space from the top
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  tableCard: {
    width: "80%",
    maxWidth: "800px",
  },
  addButton: {
    backgroundColor: "#28a745",
    color: "white",
  },
};

export default AdminUser;
