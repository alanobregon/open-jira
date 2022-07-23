import type { NextPage } from "next";
import { Layout } from "../components/layouts";

import Typography from "@mui/material/Typography";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1' color={`primary`}>
        Hola mundo
      </Typography>
    </Layout>
  )
}

export default HomePage;
