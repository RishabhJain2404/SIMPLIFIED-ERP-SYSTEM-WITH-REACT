# SIMPLIFIED ERP SYSTEM WITH REACT

This repository houses the frontend code for a React-based web application designed for product and order management. Additionally, the application facilitates calendar view functionalities to visualize anticipated order delivery dates.
---
## HOW TO RUN THE APPLICATION

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**: Change your current directory to the project directory:

   ```bash
   cd ERP-system
   ```

3. **Install Dependencies**: Install the required dependencies using npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. **Run the Application**: Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

5. **Access the Application**: Once the server is running, you can access the application by opening your web browser and navigating to [http://localhost:3000](http://localhost:3000).
---
## USER INTERFACE (UI) OVERVIEW AND WEB APPLICATION FUNCTIONALITY

### DASHBOARD

![Screenshot (205)](https://github.com/RishabhJain2404/SIMPLIFIED-ERP-SYSTEM-WITH-REACT/assets/127675963/8a5b7811-eacd-4e3a-966e-070c582d7944)


The Dashboard serves as the central hub, offering a comprehensive overview of product and order information.  For further exploration, navigate to specific sections via the top navigation bar, which provides access to dedicated modules for Products and Orders.

---

### PRODUCTS LIST PAGE

![Screenshot (207)](https://github.com/RishabhJain2404/SIMPLIFIED-ERP-SYSTEM-WITH-REACT/assets/127675963/aa963356-ba2e-4390-81f4-1e1ed2061d32)


The Products List provides a centralized view of your inventory. You can seamlessly manage your product catalog through a range of functionalities, including viewing existing products, adding new items, modifying product details, and removing products from the list.

---

### VIEWING PRODUCT INFO WITH DETAILS


![Screenshot (207)](https://github.com/RishabhJain2404/SIMPLIFIED-ERP-SYSTEM-WITH-REACT/assets/127675963/b1b3addb-c5ee-4297-9eca-45a78e19828d)

The Products List offers a comprehensive view of your inventory, presenting each product with key details including name, category, price, and current stock levels.

---

### EDITING A PRODUCT

![Screenshot (208)](https://github.com/RishabhJain2404/SIMPLIFIED-ERP-SYSTEM-WITH-REACT/assets/127675963/f3ef4c39-974f-4f08-a1ee-1c066199924d)


To modify a product's details, locate the desired product within the Products List.  Adjacent to each entry, an "Edit" button is available. Clicking this button will open a dedicated interface for editing product information.  Once the necessary changes are made, utilize the "Save" button to confirm the updates.

---

### ADDING A NEW PRODUCT

![Screenshot (209)](https://github.com/RishabhJain2404/SIMPLIFIED-ERP-SYSTEM-WITH-REACT/assets/127675963/c0575537-a654-4830-bfb8-d4983dfb11e5)

To introduce a new product to your inventory, locate and click the designated "Add Product" button.  A comprehensive form will be displayed, prompting you to enter the required product details.  Once all necessary fields are complete,  confirm the addition by clicking "Save".

---

### ORDERS LIST PAGE

![Screenshot (210)](https://github.com/RishabhJain2404/SIMPLIFIED-ERP-SYSTEM-WITH-REACT/assets/127675963/33ca0024-9746-4068-b2c7-98d396550b1f)

The Orders List serves as a central location for managing your orders. This page provides functionalities to view comprehensive order details, update the order status to reflect progress, and remove orders if necessary.

---

### VIEWING ORDER DETAILS

![Screenshot (211)](https://github.com/RishabhJain2404/SIMPLIFIED-ERP-SYSTEM-WITH-REACT/assets/127675963/327022b3-1c3b-4e93-a51a-a708cad8fcfc)

The Orders List empowers you to efficiently manage your orders. To delve into the specifics of a particular order, simply click the designated "View Details" button.  For orders ready for shipment, a convenient "Ship" button facilitates updating the order status accordingly.

---

### ORDER CALENDAR VIEW

![Screenshot (212)](https://github.com/RishabhJain2404/SIMPLIFIED-ERP-SYSTEM-WITH-REACT/assets/127675963/37ec9c50-0c44-4268-bd39-f2b30264b02e)

The application leverages a calendar view for filtering orders. Clicking on a particular date within the calendar will display all orders with expected delivery on that date, providing a clear and organized view for managing deliveries.

---

# CONCLUSION

This project demonstrates a foundational structure for a simplified Enterprise Resource Planning (ERP) system built with React. It provides basic functionalities for managing products, orders, and viewing them on a calendar.

### Key Features:

Component-based architecture for modularity and reusability.
Routing for navigating between different sections (Dashboard, Products, Orders).
Integration with react-calendar for visualizing orders on a calendar view.

### Future Enhancements:

Implement functionalities for adding, editing, and deleting products and orders.
Implement user authentication and authorization for access control.
Add features for managing customers, suppliers, and other aspects of an ERP system.
Enhance the user interface with more advanced features like filtering, sorting, and search functionalities.

### Benefits:

This project serves as a valuable starting point for understanding the core concepts of building an ERP system with React. It showcases the power of component-based development, routing, and integrating with external libraries like react-calendar. With further development, this foundation can be extended to create a comprehensive and scalable ERP application.

---
