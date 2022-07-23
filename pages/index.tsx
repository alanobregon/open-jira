import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import { EntryList, NewEntry } from "../components/ui";

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
              <NewEntry />
              <EntryList status="pending"/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title={`En Progreso`} />
            <CardContent>
              <EntryList status="in-progress"/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title={`Completadas`} />
            <CardContent>
              <EntryList status="finished"/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage;
