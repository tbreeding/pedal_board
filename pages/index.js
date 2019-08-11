import React from 'react';
import { Box, Typography, Container } from '@material-ui/core'

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant='h1'>Hello World</Typography>
      </Box>
    </Container>
  );
}
