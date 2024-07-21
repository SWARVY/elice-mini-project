import { objectToMap } from '@shared/util';

export const COURSE_QUERY = objectToMap({
  과목: { $or: [{ course_type: 0 }, { course_type: 2 }] },
  챌린지: { course_type: 1 },
  테스트: { course_type: 3 },
});

export const FORMAT_QUERY = objectToMap({
  '자유 선택형': { course_type: 0 },
  '순차 완료형': { course_type: 2 },
});

export const CATEGORY_QUERY = objectToMap({
  '프로그래밍 기초': { tag_id: 12 },
  '데이터 분석': { tag_id: 13 },
  웹: { tag_id: 14 },
  인공지능: { tag_id: 22 },
  알고리즘: { tag_id: 23 },
});

export const LEVEL_QUERY = objectToMap({
  입문: { tag_id: 100 },
  초급: { tag_id: 101 },
  중급: { tag_id: 102 },
  고급: { tag_id: 103 },
  심화: { tag_id: 104 },
});

export const PROGRAMMING_LANGUAGE_QUERY = objectToMap({
  C: { tag_id: 7 },
  'C++': { tag_id: 8 },
  자바: { tag_id: 9 },
  파이썬: { tag_id: 10 },
  자바스크립트: { tag_id: 19 },
  R: { tag_id: 20 },
  'HTML/CSS': { tag_id: 21 },
  SQL: { tag_id: 24 },
  아두이노: { tag_id: 25 },
  스크래치: { tag_id: 26 },
  코틀린: { tag_id: 28 },
  스위프트: { tag_id: 29 },
  엔트리: { tag_id: 30 },
});

export const PRICE_QUERY = objectToMap({
  무료: { enroll_type: 0, is_free: true },
  유료: { enroll_type: 0, is_free: false },
  구독: { enroll_type: 4 },
  학점: { enroll_type: 6 },
});

export const TAG_QUERIES = objectToMap({
  유형: COURSE_QUERY,
  '진행 방식': FORMAT_QUERY,
  분야: CATEGORY_QUERY,
  난이도: LEVEL_QUERY,
  언어: PROGRAMMING_LANGUAGE_QUERY,
  가격: PRICE_QUERY,
});
