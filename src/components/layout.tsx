import { Grid, GridItem } from "@chakra-ui/react";
import { Header, Footer, Content, Sidebar } from "./layout/Index";

function Layout() {
  return (
    <Grid
      minH={"100vh"}
      templateRows="repeat(12, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={1}
    >
      <GridItem rowSpan={1} colSpan={12}>
        <Header />
      </GridItem>

      <GridItem rowSpan={10} colSpan={3}>
        <Sidebar />
      </GridItem>

      <GridItem rowSpan={10} colSpan={9}>
        <Content />
      </GridItem>

      <GridItem rowSpan={1} colSpan={12}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default Layout;
