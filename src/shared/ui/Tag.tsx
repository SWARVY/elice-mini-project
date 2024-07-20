import { cn } from '@shared/util';

interface TagProps {
  title: string;
  callback?: () => void;
  selected: boolean;
}

export default function Tag({ title, callback, selected }: TagProps) {
  return (
    <button
      className={cn(
        'm-2 min-h-[30px] rounded-full px-3 py-1 transition-colors text-sm',
        selected
          ? 'text-white bg-violet-800 hover:bg-violet-900'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black',
      )}
      type="button"
      onClick={callback}>
      {title}
    </button>
  );
}
