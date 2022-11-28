import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';

export const CardsSkeleton: React.FC = () => {
  return (
    <Card>
      <Skeleton sx={{ height: 300 }} animation="wave" variant="rectangular" />
      <CardContent>
        <Typography variant="h3" sx={{ mb: 2 }}>
          <Skeleton />
        </Typography>

        <Box sx={{ my: 2 }}>
          <Stack spacing={0.5}>
            <Skeleton height={15} />
            <Skeleton height={15} />
            <Skeleton height={15} />
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
