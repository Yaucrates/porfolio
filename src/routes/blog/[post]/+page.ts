import type { PageLoad } from './$types';

const meta = import.meta.glob('/src/blog/*/page.svx');

export const load = (async ({ params }: { params: { post: string } }) => {
    const filtered_posts = Object.entries(meta).filter(
		([path, loadPage]) =>
			path.startsWith(`/src/blog/`) &&
			path.includes(`/${params.post}/page.svx`)
	);

	const post = await Promise.all(
		filtered_posts.map(([path, loadPage]) =>
			loadPage().then((loadPage) => [path.replace('../../../content/', '').replace('.lesson.svx', ''), loadPage])
		)
	) as { metadata: BlogMetadata, default: object }[][];

	return {
		post: { ...post[0][1].metadata, content: post[0][1].default }
	};
}) satisfies PageLoad;