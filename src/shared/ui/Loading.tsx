export default function Loading() {
  return (
    <div className="space-y-6 pt-40 text-center font-light text-elice-dark-gray">
      <div className="flex justify-center">
        <img
          className="size-16 animate-spin fill-elice-dark-gray"
          src="/image/loading.svg"
        />
      </div>
      <p>로딩 중 입니다</p>
    </div>
  );
}
