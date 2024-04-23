import { z } from "zod"

export const periodSchema = z.object({
    id: z.string(),
    macroCycleName: z.string(),
    description: z.string(),
    duration: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    numberOfMesoCycles: z.string(),
    numberOfMicroCycles: z.string(),
    status: z.string()
})

export type PeriodItem = z.infer<typeof periodSchema>