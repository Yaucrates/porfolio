/**
 * I copy and pasted this code. Real.
 * Idk how to do the typescript but it works so I won't question it. Real.
 */

import type { PageLoad } from './$types';

const meta = import.meta.glob('/src/blog/*/page.svx');

export const load = (async () => {
    const blogs = await Promise.all(
        Object.entries(meta).map(async ([path, loadPage]) => {
            const page = await loadPage();

			return [
                path.replace('/src/blog/', '').replace('/page.svx', ''),
                page,
            ]
        })
    ) as [string, {
        default: object;
        metadata: Omit<Blog, 'content' | 'path'>;
        [Symbol.toStringTag]: string;
    }][];

	return {
		blogs: blogs.map(([path, blog]) => ({
			path,
            ...blog.metadata,
            content: blog.default
		} as Blog))
	};
}) satisfies PageLoad;
