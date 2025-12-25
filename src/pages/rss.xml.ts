import type { APIRoute } from "astro";

import rss from '@astrojs/rss';

import { getCollection } from "astro:content";



export const GET: APIRoute = async ({ params, request, site }) => {

    const post = await getCollection('blog');

    return rss({
        // stylesheet: '/rss/styles.xsl',
        title: 'Blog de andrew',

        description: 'Es un simple blog',

        site: site ?? '',

        items: 
            post.map(({ data, slug }) => ({
                title: data.title,
                description: data.description,
                link: `/postss/${slug}`,
                pubDate: data.date,
            }))
        ,

        customData: `<language>es-ES</language>`,
    });

};