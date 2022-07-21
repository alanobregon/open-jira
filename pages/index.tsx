import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Typography
      variant='h1'
      color={`primary`}
      children={`Hola mundo`}
    />
  )
}

export default HomePage;
