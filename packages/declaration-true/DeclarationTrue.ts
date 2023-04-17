import {z} from "zod";

export const DeclarationTrue = z.object({
    declaration: z.literal(true),
});
export type DeclarationTrue = z.infer<typeof DeclarationTrue>;