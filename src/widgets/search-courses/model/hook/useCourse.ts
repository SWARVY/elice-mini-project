import { getCourseList } from '../../api';
import searchCoursesQueryKeys from '../searchCourseQueryKeys.ts';
import { CourseParameter } from '../type';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function useCourse(params: CourseParameter) {
  return useSuspenseQuery({
    queryKey: searchCoursesQueryKeys.searchCourses(params),
    queryFn: () => getCourseList(params),
  });
}
