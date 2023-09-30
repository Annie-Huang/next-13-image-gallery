import type { ImagesResults } from '@/models/Images';

function getPageNumber(url: string) {
  const { searchParams } = new URL(url);
  return searchParams.get('page');
}

export default function getPrevNextPages(images: ImagesResults) {
  let nextPage = images?.next_page ? getPageNumber(images.next_page) : null;
  const prevPage = images?.prev_page ? getPageNumber(images.prev_page) : null;

  // Not sure why it need to +1 if it can just fit into  the last page.
  const totalPages =
    images.total_results % images.per_page
      ? Math.ceil(images.total_results / images.per_page)
      : images.total_results / images.per_page + 1;
}
