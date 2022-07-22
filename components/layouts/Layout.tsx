import Head from "next/head";
import { Header } from "../ui";
import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<Props> = (props) => {
  const { 
    children, 
    title = "Open Jira", 
  } = props;

  return (
    <Box sx={{ flexGrow: 1}}>
      <Head>
        <title>{ title }</title>
      </Head>

      <Header />
      {/* Sidebar */}

      <Box sx={{ padding: "10px 20px" }}>
        { children }
      </Box>
    </Box>
  );
}
