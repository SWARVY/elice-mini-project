export default function Loading() {
  return (
    <div className="space-y-6 pt-40 text-center font-light text-gray-500">
      <div className="flex justify-center">
        <img
          className="size-16 animate-spin fill-gray-400"
          src="/image/loading.svg"
        />
      </div>
      <p>검색 결과가 없습니다</p>
    </div>
  );
}
