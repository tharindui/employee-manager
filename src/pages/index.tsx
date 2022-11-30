import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BaseLayout from "../components/layouts/BaseLayout";
import styles from "../styles/Home.module.css";
import MaterialLink from "@mui/material/Link";
import { Box } from "@mui/system";
function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Employee Manager</title>
        <meta name="description" content="Employee manager app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Link href={"/employee/list"} legacyBehavior passHref>
          <MaterialLink>Employee List</MaterialLink>
        </Link>
      </Box>
      <Box>
        <Link href={"/employee/add"} legacyBehavior passHref>
          <MaterialLink>Employee Add</MaterialLink>
        </Link>
      </Box>
    </div>
  );
}
HomePage.layout = BaseLayout;
export default HomePage;
