import Card from '@shared/ui/Card.tsx';
import { Course } from '@widgets/search-courses';

export default function CourseItem({ ...props }: Course) {
  return (
    <Card>
      <Card.Image
        src={props.image_file_url || props.logo_file_url}
        alt={`코스 이름 : ${props.title}`}
        type={props.image_file_url ? 'image' : 'logo'}
      />
      <Card.ContentWrapper>
        <Card.Description>
          <p className="font-bold">{props.title}</p>
          <p className="mt-2 line-clamp-2 text-sm text-gray-500">
            {props.short_description}
          </p>
        </Card.Description>
        <Card.Footer></Card.Footer>
      </Card.ContentWrapper>
    </Card>
  );
}
