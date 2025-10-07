"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { CalendarIcon, Plus } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { orderSchema } from "@/schema/validationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../Form/CustomFormField";
import SelectBox from "../Form/SelectBox";
import { orderStatuses } from "@/constants";
import { SelectItem } from "../ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { DialogClose, DialogFooter } from "../ui/dialog";

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
      <div className="mt-6 max-h-[80vh] overflow-y-auto pr-2">
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
                    <FormControl>
                      <SelectBox
                        placeholder="Select order status"
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                      >
                        {orderStatuses.map((status, index) => (
                          <SelectItem key={status.value} value={status.value}>
                            {status.label}
                          </SelectItem>
                        ))}
                      </SelectBox>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="deliveryDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Delivery Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* sender section */}
            <div className="grid grid-cols-2 gap-4 !mt-5">
              <div className="space-y-3">
                <h3 className="font-semibold">Sender Information</h3>
                <CustomFormField
                  control={form.control}
                  name={"sender.name"}
                  label={"Sender Name"}
                  type="text"
                  placeholder={"Sender's name"}
                />
                <CustomFormField
                  control={form.control}
                  name="sender.address"
                  label="Address"
                  type="text"
                  placeholder="Sender's address"
                />
                <CustomFormField
                  control={form.control}
                  name="sender.phone"
                  label="Phone"
                  type="number"
                  placeholder="phone number"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Receiver Information</h3>
                <CustomFormField
                  control={form.control}
                  name={"receiver.name"}
                  label={"Receiver Name"}
                  type="text"
                  placeholder={"Receiver's name"}
                />
                <CustomFormField
                  control={form.control}
                  name="receiver.address"
                  label="Address"
                  type="text"
                  placeholder="Receiver's address"
                />
                <CustomFormField
                  control={form.control}
                  name="receiver.phone"
                  label="Phone"
                  type="number"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <DialogFooter className={"sm:space-x-3"}>
              <DialogClose asChild>
                <Button variant="outline" className="px-6">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                disabled={loading}
                type="submit"
                variant="default"
                className="px-6"
              >
                {`${
                  loading
                    ? type === "UPDATE"
                      ? "Updating..."
                      : "Creating..."
                    : type === "UPDATE"
                    ? "Update"
                    : "Create"
                }Order`}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default OrderModal;
