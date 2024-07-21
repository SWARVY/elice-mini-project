import { ChangeEvent, useEffect, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounceTimer = setTimeout(() => {
      searchParams.delete('keyword');
      searchParams.set('keyword', query);
      navigate(`?${searchParams.toString()}`);
    }, 1000);
    return () => clearTimeout(delayDebounceTimer);
  }, [query]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <div className="flex items-center rounded-[0.250rem] border border-gray-300 bg-white">
      <FaMagnifyingGlass className="mx-4 fill-gray-600" />
      <div className="w-full py-3 text-sm">
        <input
          type="text"
          placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
          onChange={handleInputChange}
          className="text-g w-full focus:outline-0"
        />
      </div>
    </div>
  );
}
