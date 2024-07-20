import { cn } from '@shared/util';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface CardImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  type: 'logo' | 'image';
}

function CardImage({ src, alt, type, ...props }: CardImageProps) {
  return (
    <div className="flex h-[145px] items-center justify-center bg-gray-700">
      <img
        className={cn(
          type === 'image' ? 'size-full object-cover' : 'size-[104px]',
        )}
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  );
}

function CardDescription({ children }: PropsWithChildren) {
  return <div className="">{children}</div>;
}

function CardFooter({ children }: PropsWithChildren) {
  return <div className="border-t pt-4">{children}</div>;
}

function CardContentWrapper({ children }: PropsWithChildren) {
  return (
    <div className="flex h-[calc(100%-145px)] flex-col justify-between p-5">
      {children}
    </div>
  );
}

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="h-80 w-full overflow-hidden rounded-md border">
      {children}
    </div>
  );
}

Card.Image = CardImage;
Card.Description = CardDescription;
Card.Footer = CardFooter;
Card.ContentWrapper = CardContentWrapper;

Card.displayName = 'Card';
CardImage.displayName = 'CardImage';
CardDescription.displayName = 'CardDescription';
CardFooter.displayName = 'CardFooter';
CardContentWrapper.displayName = 'CardContentWrapper';
