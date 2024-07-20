import { CourseParameter, CourseResponse } from '../model';
import { axiosInstance } from '@shared/util';
import { AxiosResponse } from 'axios';

export async function getCourseList({
  filterConditions,
  offset,
  count,
}: CourseParameter): Promise<AxiosResponse<CourseResponse>> {
  const searchParams = new URLSearchParams();

  searchParams.set('filter_conditions', JSON.stringify(filterConditions));
  searchParams.set('sort_by', 'created_datetime.desc');
  searchParams.set('offset', offset.toString());
  searchParams.set('count', count.toString());

  return axiosInstance.get(
    `/org/academy/course/list/?${searchParams.toString()}`,
  );
}
