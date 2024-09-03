/**
 * All of these must be specified by the frontmatter of each blog Except for the following:
 * path: This will be filled by the directory the file is in.
 * Content: This will be filled by the content of the file.
 */

interface Blog extends BlogMetadata { // Spread Metadata properties into Blog
    path: string;
    content: object;
}


interface BlogMetadata {
    title: string,
    date: string,
    tags: string[],
}