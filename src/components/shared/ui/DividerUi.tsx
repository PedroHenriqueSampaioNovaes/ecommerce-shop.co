'use client';

import { Divider } from '@mui/material';

interface DividerUiProps {
  margin?: string;
}

export default function DividerUi({ margin }: DividerUiProps) {
  const marginClass = margin || 'my-5';

  return <Divider className={`border-black/10 ${marginClass}`} />;
}
