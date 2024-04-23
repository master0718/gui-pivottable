import { z } from "zod";

export const userSchema = z.object({
	id: z.string(),
	userName: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	profile: z.string(),
	status: z.string(),
});

export type UserItem = z.infer<typeof userSchema>;
