import { CourseParameter } from '@widgets/search-courses';

const searchCoursesQueryKeys = {
  searchCourses: (params: CourseParameter) => ['search-courses', params],
};

export default searchCoursesQueryKeys;
