import links from '$lib/links.json';
import { linksJsonSchema, type Link } from '$lib/types';
import type { PageLoad } from '../../.svelte-kit/types/src/routes/$types';

export const load: PageLoad = async () => {
	try {
		const linksData = linksJsonSchema.parse(links);
		const events = linksData.filter((link) => link.type === 'event' && !isExpired(link));
		const social = linksData.filter((link) => link.type === 'social' && !isExpired(link));
		const music = linksData.filter((link) => link.type === 'music' && !isExpired(link));

		return {
			links: {
				events,
				social,
				music
			}
		};
	} catch (error) {
		console.error(error);
		return {
			links: {
				events: [],
				social: [],
				music: []
			}
		};
	}
};

const isExpired = (link: Link) => {
	if (!link.expires) return false;
	return new Date(link.expires) < new Date();
};
