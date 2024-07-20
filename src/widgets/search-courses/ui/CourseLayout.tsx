import CourseList from './CourseList';
import SearchHeader from './SearchHeader';
import { useCourseParameter } from '@widgets/search-courses';

export default function CourseLayout() {
  const filterConditions = useCourseParameter();

  return (
    <div className="space-y-4">
      <SearchHeader />
      <CourseList filterConditions={filterConditions} />
    </div>
  );
}
