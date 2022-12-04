import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import createEmotionCache from "config/createEmotionCache";
import theme from "../../config/theme";
import Footer from "../organisms/footer/Footer";
import Header from "../organisms/header/Header";
import AppBaseLayout from "./AppBaseLayout";

const clientSideEmotionCache = createEmotionCache();

function BaseLayout({
  children,
  emotionCache = clientSideEmotionCache,
}: {
  children: React.ReactNode;
  emotionCache: EmotionCache;
}) {
  return (
    <AppBaseLayout>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Container maxWidth="lg" pb={30} component={Box} mt={12}>
            {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </CacheProvider>
    </AppBaseLayout>
  );
}

export default BaseLayout;
