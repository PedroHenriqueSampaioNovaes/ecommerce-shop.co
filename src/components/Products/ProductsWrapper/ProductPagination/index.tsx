'use client';

import { Dispatch, SetStateAction } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Pagination, PaginationItem } from '@mui/material';

import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PaginationProps {
  pages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export default function ProductPagination({
  pages,
  page,
  setPage,
}: PaginationProps) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleChange(_: React.ChangeEvent<unknown>, value: number) {
    setPage(value);

    const params = new URLSearchParams(searchParams);
    params.set('page', String(value));

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <Pagination
      count={pages}
      page={page}
      shape="rounded"
      onChange={handleChange}
      className="[&_.MuiPaginationItem-previousNext]:border [&_.MuiPaginationItem-previousNext]:border-black/10 [&_.MuiPaginationItem-previousNext]:py-2 [&_.MuiPaginationItem-previousNext]:px-3.5 [&_.MuiPagination-ul_*:first-of-type]:mr-auto [&_.MuiPagination-ul_*:last-of-type]:ml-auto"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          slots={{ previous: PreviousButton, next: NextButton }}
        />
      )}
    />
  );
}

function PreviousButton() {
  return (
    <div className="flex items-center gap-1">
      <ArrowLeft size={20} /> Previous
    </div>
  );
}

function NextButton() {
  return (
    <div className="flex items-center gap-1">
      <span className="font-medium">Next</span> <ArrowRight size={20} />
    </div>
  );
}
