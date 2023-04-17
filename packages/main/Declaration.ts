import {DeclarationFalse} from "declaration-false/DeclarationFalse";
import {DeclarationTrue} from "declaration-true/DeclarationTrue";
import {z} from "zod";


const parsed1 = DeclarationFalse.parse({declaration: false});
const extend1 = DeclarationFalse.extend({abc: z.string()});
const and1 = DeclarationFalse.and(z.object({abc: z.string()}));

const parsed2 = DeclarationTrue.parse({declaration: true});
const extend2 = DeclarationTrue.extend({abc: z.string()});
const and2 = DeclarationFalse.and(z.object({abc: z.string()}));