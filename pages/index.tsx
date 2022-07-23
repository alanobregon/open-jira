import type { NextPage } from "next";
import { EntryList } from "../components/ui";
import { Layout } from "../components/layouts";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title={`Pendientes`} />
            <CardContent>
              <EntryList />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title={`En Progreso`} />
            <CardContent>
              <EntryList />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title={`Completadas`} />
            <CardContent>
              <EntryList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage;
