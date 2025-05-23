import { RHFSelectField } from "@/components/atoms/RHFSelect";
import { useAddress } from "@/hooks/address/useAddress";
import { isArray } from "lodash";
import React from "react";

export const Address: React.FC = () => {
  const { data } = useAddress();
  console.log("Address data", data);
  return (
    <RHFSelectField
      options={isArray(data) ? data : []}
      name="address"
      label="Địa chỉ"
      placeholder="Nhập địa chỉ"
    />
  );
};
