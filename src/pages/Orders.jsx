import React from "react";
import icon from "../assets/admin_assets/parcel_icon.svg";

const OrderPage = () => {
  const orders = [
    {
      items: "Men Round Neck Pure Cotton T-shirt x , Men Round Neck Pure Cotton T-shirt x 1 M",
      customerName: "VICTOR KOECH",
      address: "447 Broadway, New York, NY, United States, 10013",
      itemCount: 2,
      method: "COD",
      paymentStatus: "Pending",
      date: "10/31/2024",
      total: 138,
      status: "Order Placed",
    },
    {
      items: "Men Round Neck Pure Cotton T-shirt x , Men Round Neck Pure Cotton T-shirt x 1 M",
      customerName: "Chandranshu Bhardwaj",
      address: " New York, NY, United States, 10013",
      itemCount: 4,
      method: "COD",
      paymentStatus: "Pending",
      date: "10/31/2024",
      total: 138,
      status: "Shipped",
    },
    {
      items: "Men Round Neck Pure Cotton T-shirt x , Men Round Neck Pure Cotton T-shirt x 1 M",
      customerName: "Chandranshu Bhardwaj",
      address: "Pawan Nagar gali,India, 143001",
      itemCount: 1,
      method: "COD",
      paymentStatus: "Pending",
      date: "10/30/2024",
      total: 202,
      status: "Out for delivery",
    },
    {
      items: "Women Round Neck Pure Cotton T-shirt x , Men Round Neck Pure Cotton T-shirt x 1 M",
      customerName: "Chandranshu Bhardwaj",
      address: "Pawan Nagar gali,India, 143001",
      itemCount: 1,
      method: "COD",
      paymentStatus: "Pending",
      date: "10/30/2024",
      total: 202,
      status: "Order Placed",
    },
    {
      items: "Boy Round Neck Pure Cotton T-shirt x 1 L",
      customerName: "s as",
      address: "BE-136, NEWTOWN, West Bengal, India, 700156",
      itemCount: 1,
      method: "COD",
      paymentStatus: "Pending",
      date: "10/30/2024",
      total: "",
      status: "Order Placed",
    },
  ];

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-gray-600 mb-6">Order Page</h1>
      {orders.map((order, index) => (
        <div
          key={index}
          className="bg-white  rounded-lg p-6 mb-4 flex flex-col md:flex-row justify-between items-start border border-gray-300"
        >
          <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
            <div className="sm:flex items-center mb-2">
              <div className=" w-10 h-10 bg-gray-200 flex items-center justify-center mr-4">
                <img src={icon} className="w-full h-full" alt="Order Icon" />
              </div>
              <div>
                {order.items.split(',').map((item, i) => (
                  <p key={i} className="text-gray-700">{item.trim()}</p>
                ))}
                <p className="text-gray-800 mb-1">{order.customerName}</p>
                <p className="text-sm text-gray-500">{order.address}</p>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-4 ml-4 md:mb-0 md:w-1/4">
            <p>Items: {order.itemCount}</p>
            <p>Method: {order.method}</p>
            <p>Payment: {order.paymentStatus}</p>
            <p>Date: {order.date}</p>
          </div>
          <div className="w-full md:w-1/4 text-right mb-4 md:mb-0">
            <p className="text-xl  text-gray-800">${order.total}</p>
          </div>
          <div className="w-full md:w-1/4 text-right mb-4 md:mb-0">
            <select
              className="border border-gray-300 rounded px-3 py-1"
              value={order.status}
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;





