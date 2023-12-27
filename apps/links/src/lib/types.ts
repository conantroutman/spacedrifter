import { z } from 'zod';

export const linksJsonSchema = z.array(
	z.object({
		href: z.string(),
		label: z.string(),
		type: z.union([
			z.literal('music'),
			z.literal('social'),
			z.literal('event'),
			z.literal('other')
		]),
		expires: z.string().optional(),
		icon: z.string().optional()
	})
);

export type Links = z.infer<typeof linksJsonSchema>;

export type Link = Links[number];
