import { CATEGORY_TAG } from '@shared/constants';
import Card from '@shared/ui/Card.tsx';
import { Course } from '@widgets/search-courses';

// props.tags를 통해서 태그들을 확인하고 해당하는게 있다면 해당 내용 표시, 없으면 미분류
export default function CourseItem({ ...props }: Course) {
  const filteredCategory = CATEGORY_TAG.filter((tag) =>
    props.taglist.includes(tag),
  );
  const selectedCategory = filteredCategory.length
    ? filteredCategory[0]
    : '미분류';

  return (
    <Card>
      <Card.Image
        src={props.image_file_url || props.logo_file_url}
        alt={`코스 이름 : ${props.title}`}
        type={props.image_file_url ? 'image' : 'logo'}
      />
      <Card.ContentWrapper>
        <Card.Description>
          <div className="space-y-2">
            <p className="text-[12px] font-bold text-elice-violet">
              {selectedCategory}
            </p>
            <p className="line-clamp-2 font-bold">{props.title}</p>
            <p className="line-clamp-2 text-sm text-elice-dark-gray">
              {props.short_description}
            </p>
          </div>
        </Card.Description>
        <Card.Footer>
          <>
            {Number(props.price) ? (
              <p className="font-bold">
                ₩{Number(props.price).toLocaleString()}
              </p>
            ) : (
              <p className="font-bold text-elice-green">무료</p>
            )}
          </>
        </Card.Footer>
      </Card.ContentWrapper>
    </Card>
  );
}
