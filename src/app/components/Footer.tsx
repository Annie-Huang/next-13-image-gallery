import Link from 'next/link';

type Props = {
  topic: string;
  page?: string;
  prevPage: string | null;
  nextPage: string | null;
};

export default function Footer({ topic, page, nextPage, prevPage }: Props) {
  if (!prevPage && !nextPage) return;

  const pageNums: number[] = [];
  if (prevPage && nextPage) {
    for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
      pageNums.push(i);
    }
  }

  const nextPageArea = nextPage ? (
    <Link
      href={`/results/${topic}/${nextPage}`}
      className={!prevPage ? 'mx-auto' : ''}
    >
      {!prevPage ? 'more' : ''} &gt;&gt;&gt;
    </Link>
  ) : null;

  const prevPageArea = prevPage ? (
    <Link
      href={`/results/${topic}/${nextPage}`}
      className={!nextPage ? 'mx-auto' : ''}
    >
      &lt;&lt;&lt; {!nextPage ? 'back' : null}
    </Link>
  ) : null;

  return <div></div>;
}
