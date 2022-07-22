import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function ModelPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} color="primary" sx={{ "& .MuiPaginationItem-root": {
      color: "#fff"
    }}}/>
    </Stack>
  );
}