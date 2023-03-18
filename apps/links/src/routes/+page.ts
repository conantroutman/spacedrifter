import links from '$lib/links.json'

/** @type {import('./$types').PageLoad} */
export function load() {
    const events = links.filter(link => link.type ==='event')
    const social = links.filter(link => link.type === 'social')
    const music = links.filter(link => link.type === 'music')

    return {
        links: {
            events,
            social,
            music
        }
    }
  }