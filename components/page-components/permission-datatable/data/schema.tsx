import { z } from "zod";

export const permissionSchema = z.object({
	id: z.string(),
	menu: z.string(),
	subMenu: z.string(),
	action: z.string(),
	role: z.string(),
	admin: z.string(),
	coach: z.string(),
	athlete: z.string(),
	assistant: z.string(),
});

export type PermissionItem = z.infer<typeof permissionSchema>;
