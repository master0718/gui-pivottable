import { z } from "zod"

export const exerciseSchema = z.object({
    id: z.string(),
    name: z.string(),
})

export type ExerciseItem = z.infer<typeof exerciseSchema>