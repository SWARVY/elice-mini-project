import {
  CATEGORY_QUERY,
  COURSE_QUERY,
  FilterConditions,
  FORMAT_QUERY,
  LEVEL_QUERY,
  PRICE_QUERY,
  PROGRAMMING_LANGUAGE_QUERY,
  Query,
} from '@widgets/search-courses';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const defaultFilterConditions: FilterConditions = {
  $and: [
    { title: '%%' },
    { $or: [{ status: 2 }, { status: 3 }, { status: 4 }] },
    { is_datetime_enrollable: true },
  ],
};

interface FilterCategory {
  name: string;
  queries: Map<string, Query>;
}
function buildFilterConditions(
  searchParams: URLSearchParams,
): FilterConditions {
  const newFilterConditions: FilterConditions = {
    $and: [...defaultFilterConditions.$and!],
  };

  const filterCategories: FilterCategory[] = [
    { name: '유형', queries: COURSE_QUERY },
    { name: '진행 방식', queries: FORMAT_QUERY },
    { name: '분야', queries: CATEGORY_QUERY },
    { name: '난이도', queries: LEVEL_QUERY },
    { name: '언어', queries: PROGRAMMING_LANGUAGE_QUERY },
    { name: '가격', queries: PRICE_QUERY },
  ];

  filterCategories.forEach(({ name, queries }) => {
    const tagNameList = searchParams.getAll(name);

    if (tagNameList.length > 0) {
      const orConditions = tagNameList
        .filter((tagName) => queries.has(tagName))
        .map((tagName) => queries.get(tagName)!)
        .filter((query): query is Query => query !== undefined);

      console.log(queries.get('챌린지'));

      console.log(
        'orConditions : ',
        tagNameList.filter((tagName) => queries.has(tagName)),
      );

      if (orConditions.length > 0) {
        newFilterConditions.$and!.push({ $or: orConditions });
      }
    }
  });

  return newFilterConditions;
}

export default function useCourseParameter() {
  const [filterConditions, setFilterConditions] = useState(
    defaultFilterConditions,
  );
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const newFilterConditions = buildFilterConditions(searchParams);

    setFilterConditions(newFilterConditions);
  }, [searchParams]);

  return filterConditions;
}
