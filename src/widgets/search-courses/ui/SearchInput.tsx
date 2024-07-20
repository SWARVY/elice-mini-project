import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function SearchInput() {
  return (
    <div className="flex items-center rounded-[0.250rem] border border-gray-300">
      <FaMagnifyingGlass className="mx-4 fill-gray-600" />
      <div className="w-full py-3 text-sm">
        <input
          type="text"
          placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
          className="text-g w-full focus:outline-0"
        />
      </div>
    </div>
  );
}
