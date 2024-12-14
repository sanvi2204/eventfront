import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UserDetails = ({ user }) => {
  return (
    <div style={styles.outerContainer}>
      <Card style={styles.card}>
        <CardHeader>
          <CardTitle>User Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={styles.detailRow}>
            <span style={styles.label}>User ID:</span>
            <span>{user.userID}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.label}>Name:</span>
            <span>{user.name}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.label}>Email:</span>
            <span>{user.email}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.label}>Status:</span>
            <span>{user.status}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.label}>Role:</span>
            <span>{user.role}</span>
          </div>
          {/* Add more fields as needed */}
          <div style={styles.buttonContainer}>
            <Button style={styles.button}>Edit</Button>
            <Button style={styles.button}>Delete</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const styles = {
  outerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  card: {
    width: "80%",
    maxWidth: "600px",
    padding: "20px",
  },
  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
  },
  label: {
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
  },
};

// Example user data
const mockUser = {
  userID: "USR001",
  name: "John Doe",
  email: "johndoe@example.com",
  status: "Active",
  role: "Admin",
};

const UserDetailsPage = () => {
  return <UserDetails user={mockUser} />;
};

export default UserDetails;
