import React from "react";
import {
  PagesTitle,
  OrdersTable,
  OrderTableForSmallDevices,
} from "@/components/profilePageComponents";

const TABLE_DATA = {
  header: ["Number ID", "Dates", "Status", "Price"],
  body: [
    {
      id: 1,
      dates: "2022-01-01",
      status: "Pending",
      price: 200,
    },
    {
      id: 2,
      dates: "2022-01-01",
      status: "Pending",
      price: 200,
    },
    {
      id: 3,
      dates: "2022-01-01",
      status: "Pending",
      price: 200,
    },
    {
      id: 4,
      dates: "2022-01-01",
      status: "Pending",
      price: 200,
    },
    {
      id: 5,
      dates: "2022-01-01",
      status: "Pending",
      price: 200,
    },
  ],
};

const Orders = () => {
  return (
    <div>
      <PagesTitle>Orders History</PagesTitle>
      <OrdersTable data={TABLE_DATA} />
      <OrderTableForSmallDevices data={TABLE_DATA} />
    </div>
  );
};

export default Orders;
