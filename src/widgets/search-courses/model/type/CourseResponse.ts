export interface Course {
  id: number;
  title: string;
  short_description: string;
  image_file_url: string;
  logo_file_url: string;
  price: string;
  status: number;
}

export interface CourseResponse {
  _result: {
    status: string;
    reason: string;
  };
  courses: Course[];
  course_count: number;
}
