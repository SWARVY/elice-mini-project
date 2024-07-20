import CourseItem from './CourseItem';
import CoursePagination from './CoursePagination';
import { CONTENTS_PER_PAGE } from '@shared/constants';
import { Error, Loading, NoResult } from '@shared/ui';
import { ErrorBoundary, Suspense } from '@suspensive/react';
import { FilterConditions, useCourse } from '@widgets/search-courses';
import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';

interface CourseListProps {
  filterConditions: FilterConditions;
}

const CourseListContent = memo(function ({
  filterConditions,
}: CourseListProps) {
  const [searchParams] = useSearchParams();
  const page = searchParams.has('page') ? Number(searchParams.get('page')) : 1;
  const { data } = useCourse({
    filterConditions,
    offset: (page - 1) * CONTENTS_PER_PAGE,
    count: CONTENTS_PER_PAGE,
  });

  return (
    <>
      {data.data.course_count > 0 ? (
        <div className="w-full space-y-6">
          <p className="border-b py-3 text-xs  font-bold">
            전체 {data.data.course_count}개
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.data.courses.map((course) => (
              <CourseItem key={course.id} {...course} />
            ))}
          </div>
          <CoursePagination currentPage={page} size={data.data.course_count} />
        </div>
      ) : (
        <NoResult />
      )}
    </>
  );
});

export default function CourseList({ filterConditions }: CourseListProps) {
  return (
    <div>
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <CourseListContent filterConditions={filterConditions} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
