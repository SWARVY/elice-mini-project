import { cn } from '@shared/util';
import { usePagination } from '@widgets/search-courses';
import { useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface CoursePaginationProps {
  currentPage: number;
  size: number;
}

export default function CoursePagination({
  currentPage,
  size,
}: CoursePaginationProps) {
  const pagination = usePagination({ currentPage, size });
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const paginationButtonHandler = useCallback(
    (page: number) => {
      searchParams.delete('page');
      searchParams.set('page', page.toString());
      navigate(`/?${searchParams.toString()}`);
    },
    [searchParams],
  );

  return (
    <div className="flex w-full justify-center gap-x-2">
      {pagination.map((page) => (
        <button
          type="button"
          key={page}
          className={cn(
            'flex font-extralight size-6 text-sm items-center justify-center rounded-md p-2',
            page === currentPage
              ? 'bg-purple-950 text-white'
              : 'text-gray-500 hover:bg-purple-200 hover:font-bold hover:text-purple-950',
          )}
          onClick={() => paginationButtonHandler(page)}>
          {page}
        </button>
      ))}
    </div>
  );
}
