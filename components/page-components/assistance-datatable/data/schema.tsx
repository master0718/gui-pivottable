import { z } from "zod";

export const assistanceSchema = z.object({
	id: z.string(),
	menu: z.string(),
	subMenu: z.string(),
	action: z.string(),
	role: z.string(),
	user1: z.string(),
	user2: z.string(),
	user3: z.string(),
});

export type AssistanceItem = z.infer<typeof assistanceSchema>;
