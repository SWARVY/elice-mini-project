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
          ? 'text-white bg-elice-violet hover:bg-elice-violet-hover'
          : 'bg-elice-gray font-normal hover:font-medium text-elice-dark-gray hover:text-elice-darkest-gray hover:bg-elice-gray-hover',
      )}
      type="button"
      onClick={callback}>
      {title}
    </button>
  );
}
