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

  // Always show the current page as the first items in the list.
  // e.g. if current page is 10, it will show
  // <<< 10 11 12 13 >>>
  const prevPageArea = prevPage ? (
    <>
      <Link
        href={`/results/${topic}/${nextPage}`}
        className={!nextPage ? 'mx-auto' : ''}
      >
        &lt;&lt;&lt; {!nextPage ? 'back' : null}
      </Link>
      {pageNums.map((num, i) =>
        page && num === parseInt(page) ? (
          <span key={i}>{num}</span>
        ) : (
          <Link href={`/results/${topic}/${num}`} className='underline' key={i}>
            {num}
          </Link>
        )
      )}
    </>
  ) : null;

  return (
    <footer className='flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto'>
      {prevPageArea}
      {nextPageArea}
    </footer>
  );
}
