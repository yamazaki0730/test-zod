import {z} from "zod";

export const DeclarationFalse = z.object({
    declaration: z.literal(false),
});
export type DeclarationFalse = z.infer<typeof DeclarationFalse>;