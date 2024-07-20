import {
  CATEGORY_TAG,
  COURSE_TYPE_TAG,
  FORMAT_TAG,
  LEVEL_TAG,
  PRICE_TAG,
  PROGRAMMING_LANGUAGE_TAG,
} from '@shared/constants';
import Tag from '@shared/ui/Tag.tsx';
import { memo, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface FilterItemProps<T extends string> {
  title: string;
  tags: readonly T[];
  callback: {
    add: (key: string, value: string) => void;
    remove: (key: string, value: string) => void;
    check: (title: string, tagInfo: string) => boolean;
  };
}

function FilterItems<T extends string>({
  title,
  tags,
  callback,
}: FilterItemProps<T>) {
  return (
    <div className="flex items-stretch bg-gray-100">
      <p className="h-auto w-24 shrink-0 border-r px-[14px] py-4 text-[12px] font-bold text-gray-800">
        {title}
      </p>
      <div className="flex h-auto flex-1 flex-wrap bg-white px-2">
        {tags.map((tagInfo) => {
          const selected = callback.check(title, tagInfo);

          return (
            <Tag
              key={tagInfo}
              title={tagInfo}
              selected={selected}
              callback={
                selected
                  ? () => callback.remove(title, tagInfo)
                  : () => callback.add(title, tagInfo)
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default memo(function CourseFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const addSearchParamsHandler = useCallback(
    (key: string, value: string) => {
      const copySearchParams = new URLSearchParams(searchParams.toString());

      copySearchParams.append(key, value);
      navigate(`/?${decodeURI(copySearchParams.toString())}`);
      setSearchParams(copySearchParams);
    },
    [navigate, searchParams],
  );

  const removeSearchParamsHandler = useCallback(
    (key: string, value: string) => {
      const copySearchParams = new URLSearchParams(searchParams.toString());
      const targetKey = copySearchParams.getAll(key);
      const filteredParams = targetKey.filter((val) => val !== value);

      copySearchParams.delete(key);

      filteredParams.forEach((val) => {
        copySearchParams.append(key, val);
      });

      navigate(`/?${decodeURI(copySearchParams.toString())}`);
      setSearchParams(copySearchParams);
    },
    [navigate, searchParams],
  );

  const checkSelectedHandler = useCallback(
    (title: string, tagInfo: string) => {
      const selectedParams = searchParams.getAll(title);

      if (!selectedParams.length) {
        return false;
      }

      return selectedParams.includes(tagInfo);
    },
    [searchParams],
  );

  const searchParamsHandler = {
    add: addSearchParamsHandler,
    remove: removeSearchParamsHandler,
    check: checkSelectedHandler,
  };

  return (
    <div className="divide-y border border-gray-200">
      <FilterItems
        title="유형"
        tags={COURSE_TYPE_TAG}
        callback={searchParamsHandler}
      />
      <FilterItems
        title="진행 방식"
        tags={FORMAT_TAG}
        callback={searchParamsHandler}
      />
      <FilterItems
        title="분야"
        tags={CATEGORY_TAG}
        callback={searchParamsHandler}
      />
      <FilterItems
        title="난이도"
        tags={LEVEL_TAG}
        callback={searchParamsHandler}
      />
      <FilterItems
        title="언어"
        tags={PROGRAMMING_LANGUAGE_TAG}
        callback={searchParamsHandler}
      />
      <FilterItems
        title="가격"
        tags={PRICE_TAG}
        callback={searchParamsHandler}
      />
    </div>
  );
});
