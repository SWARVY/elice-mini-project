import SearchInput from './SearchInput';
import CourseFilters from '@widgets/search-courses/ui/CourseFilters.tsx';

export default function SearchHeader() {
  return (
    <div className="space-y-3">
      <SearchInput />
      <CourseFilters />
    </div>
  );
}
