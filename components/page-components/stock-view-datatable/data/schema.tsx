import { z } from "zod"

export const stockItemSchema = z.object({
    id: z.string(),
    name: z.string(),
    category: z.string(),
    subCategory: z.string(),
    unit: z.string(),
    quantity: z.string(),
})

export type StockItem = z.infer<typeof stockItemSchema>