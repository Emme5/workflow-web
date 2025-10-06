"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { Plus } from "lucide-react";
import { Form, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";
import { orderSchema } from "@/schema/validationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../Form/CustomFormField";
import SelectBox from "../Form/SelectBox";

const OrderModal = ({ order = {}, type = "CREATE", trigger = null }) => {
  const form = useForm({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      type: order?.type || "",
      parameters: order?.parameters || "",
      price: order?.price || "",
      status: order?.status || "",
      deliveryDate: order?.deliveryDate || "",

      sender: {
        name: order?.sender?.name || "",
        address: order?.sender?.address || "",
        phone: order?.sender?.phone || "",
      },

      receiver: {
        name: order?.receiver?.name || "",
        address: order?.receiver?.address || "",
        phone: order?.receiver?.phone || "",
      },
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    console.log(values, "order value");
  };

  const TriggerButton = trigger ? (
    trigger
  ) : (
    <Button>
      Create new order <Plus />
    </Button>
  );

  return (
    <Modal
      title={type === "UPDATE" ? "Update Order" : "Create Order"}
      trigger={TriggerButton}
      classes={"max-w-[800px]"}
    >
      <div className="mt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <h3 className="font-semibold">Order Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <CustomFormField
                control={form.control}
                name={"type"}
                label={"Order Type"}
                placeholder={"Type of order"}
              />
              <CustomFormField
                control={form.control}
                name={"type"}
                label={"Order Type"}
                placeholder={"Type of order"}
              />
              <CustomFormField
                control={form.control}
                name={"parameters"}
                label={"Order Parameters"}
                placeholder={"Weight and dimensions"}
              />
              <CustomFormField
                control={form.control}
                name={"price"}
                label={"Price"}
                type="number"
                placeholder={"Price"}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <SelectBox
                      placeholder="Select order status"
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                    />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default OrderModal;
