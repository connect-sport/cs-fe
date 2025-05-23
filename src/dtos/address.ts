import { z } from "zod";
import { Reponse } from "./response";

export const AddressDto = z.object({
  label: z.string(),
  value: z.string(),
});

export const addressResponse = Reponse.merge(
  z.object({
    data: z.array(AddressDto),
  })
);

export type AddressRes = z.infer<typeof addressResponse>;
export type AddressDto = z.infer<typeof AddressDto>;
