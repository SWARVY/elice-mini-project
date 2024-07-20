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
        'm-2 rounded-full px-3 py-1 transition-colors text-sm',
        selected
          ? 'text-white bg-purple-900 hover:bg-purple-950'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-300 hover:text-black',
      )}
      type="button"
      onClick={callback}>
      {title}
    </button>
  );
}
