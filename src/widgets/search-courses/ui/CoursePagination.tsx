import { CONTENTS_PER_PAGE } from '@shared/constants';
import { cn } from '@shared/util';
import { usePagination } from '@widgets/search-courses';
import { HTMLAttributes, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface CoursePaginationProps {
  currentPage: number;
  size: number;
}

interface ChevronButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'prev' | 'next';
  callback: () => void;
  disabled: boolean;
}

interface PaginationButtonProps {
  page: number;
  currentPage: number;
  paginationButtonHandler: (page: number) => void;
}

function ChevronButton({
  type,
  callback,
  disabled,
  ...props
}: ChevronButtonProps) {
  return (
    <button
      className={cn(
        'flex size-6 items-center justify-center rounded-md',
        disabled
          ? 'cursor-not-allowed text-gray-400'
          : 'transition-colors hover:bg-violet-100',
      )}
      type="button"
      onClick={callback}
      disabled={disabled}
      {...props}>
      {type === 'prev' ? (
        <FiChevronLeft className="size-[14px]" />
      ) : (
        <FiChevronRight className="size-[14px]" />
      )}
    </button>
  );
}

function PaginationButton({
  page,
  currentPage,
  paginationButtonHandler,
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      key={page}
      className={cn(
        'flex font-extralight size-6 text-sm items-center justify-center rounded-md p-2',
        page === currentPage
          ? 'transition-colors duration-300 bg-violet-900 text-white hover:bg-violet-100 hover:text-violet-800 hover:font-bold'
          : 'text-gray-500 hover:bg-violet-100 hover:font-bold hover:text-violet-800',
      )}
      onClick={() => paginationButtonHandler(page)}>
      {page}
    </button>
  );
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
      searchParams.set('page', page.toString());
      navigate(`/?${searchParams.toString()}`);
    },
    [searchParams],
  );

  const chevronButtonHandler = useCallback(
    (type: 'prev' | 'next') => {
      type === 'prev'
        ? searchParams.set('page', (currentPage - 1).toString())
        : searchParams.set('page', (currentPage + 1).toString());
      navigate(`/?${searchParams.toString()}`);
    },
    [navigate, searchParams],
  );

  return (
    <div className="flex w-full justify-center gap-x-2">
      <ChevronButton
        type="prev"
        callback={() => chevronButtonHandler('prev')}
        disabled={currentPage === 1}
      />
      {pagination.map((page) => (
        <PaginationButton
          key={page}
          page={page}
          currentPage={currentPage}
          paginationButtonHandler={paginationButtonHandler}
        />
      ))}
      <ChevronButton
        type="next"
        callback={() => chevronButtonHandler('next')}
        disabled={currentPage === Math.ceil(size / CONTENTS_PER_PAGE)}
      />
    </div>
  );
}
