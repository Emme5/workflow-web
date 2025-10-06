import React from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

const SelectBox = ({
  value,
  onChange,
  label,
  children,
  placeholder = "Please select",
  disabled,
}) => {
  return (
    <div>
      {label && (
        <Label className="text-sm font-medium mb-2 block">{label}</Label>
      )}
      <Select onValueChange={onChange} value={value} disabled={disabled}>
        <SelectTrigger className="text-sm font-normal placeholder:font-light focus:ring-0 focus:ring-offset-0 focus-visible:ring-0">
          <SelectValue placeholder={placeholder}>
            {value || placeholder}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
    </div>
  ); 
};

export default SelectBox;
