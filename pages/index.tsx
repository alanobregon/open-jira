import type { NextPage } from "next";
import { Layout } from "../components/layouts";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardHeader";
import CardHeader from "@mui/material/CardContent";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title={`Pendientes`} />
            <CardContent>
              {/* Agregar nuevas entradas */}
              {/* Listar entradas */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title={`En Progreso`} />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title={`Completadas`} />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage;
