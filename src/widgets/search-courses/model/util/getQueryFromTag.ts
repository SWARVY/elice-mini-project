import { Query, TAG_QUERIES } from '@widgets/search-courses';

export default function getQueryFromTag(
  title: string,
  tagName: string,
): Query | undefined {
  if (!TAG_QUERIES.has(title)) {
    return undefined;
  }

  const selectedQuery = TAG_QUERIES.get(title);

  if (!selectedQuery.has(tagName)) {
    return undefined;
  }

  return selectedQuery.get(tagName);
}
