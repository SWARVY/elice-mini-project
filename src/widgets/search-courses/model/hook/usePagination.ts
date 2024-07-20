import { CONTENTS_PER_PAGE, PAGINATION_SIZE_PER_PAGE } from '@shared/constants';
import { useEffect, useState } from 'react';

interface UsePaginationParmeter {
  currentPage: number;
  size: number;
}

export default function usePagination({
  currentPage,
  size,
}: UsePaginationParmeter) {
  const [pagination, setPagination] = useState<number[]>([]);
  const maxPage = Math.ceil(size / CONTENTS_PER_PAGE);

  useEffect(() => {
    if (currentPage <= maxPage) {
      if (currentPage <= PAGINATION_SIZE_PER_PAGE / 2) {
        setPagination(
          Array.from(
            {
              length:
                maxPage > PAGINATION_SIZE_PER_PAGE
                  ? PAGINATION_SIZE_PER_PAGE
                  : maxPage,
            },
            (_, idx) => idx + 1,
          ),
        );
      } else if (
        currentPage > PAGINATION_SIZE_PER_PAGE / 2 &&
        currentPage <= maxPage - PAGINATION_SIZE_PER_PAGE / 2
      ) {
        setPagination(
          Array.from(
            { length: PAGINATION_SIZE_PER_PAGE },
            (_, idx) =>
              currentPage - Math.floor(PAGINATION_SIZE_PER_PAGE / 2) + idx,
          ),
        );
      } else if (currentPage > maxPage - PAGINATION_SIZE_PER_PAGE / 2) {
        setPagination(
          Array.from(
            { length: PAGINATION_SIZE_PER_PAGE },
            (_, idx) => maxPage - PAGINATION_SIZE_PER_PAGE + idx + 1,
          ),
        );
      }
    }
  }, [currentPage, size]);

  return pagination;
}
