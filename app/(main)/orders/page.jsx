"use client";

import React from "react";
import SearchInput from "@/components/Form/SearchInput";
import OrderModal from "@/components/Modal/OrderModal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { orderTableColumns, orderTableData } from "@/constants";

const OrderPage = () => {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <SearchInput placeholder="Search orders..." />
        <OrderModal />
      </div>

      {/* Table */}
      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            {orderTableColumns.map((col) => (
              <TableHead
                key={col.key}
                className={
                  col.key === "price"
                    ? "text-right"
                    : col.key === "actions"
                    ? "text-center"
                    : ""
                }
              >
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderTableData.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.destination}</TableCell>
              <TableCell>{order.cargo}</TableCell>
              <TableCell className="text-right">{order.price}</TableCell>
              <TableCell>{order.deliveryDate}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium
                    ${
                      order.status === "On-time"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Delay"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                >
                  {order.status}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <button className="text-blue-600 hover:underline">View</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderPage;
