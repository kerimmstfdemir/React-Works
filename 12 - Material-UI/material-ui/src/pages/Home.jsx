import AppBarComp from "../components/AppBarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme, ThemeProvider } from "@mui/material";
import { teal } from "@mui/material/colors";
import MakeStylesComp from "../components/MakeStylesComp";

const Home = () => {
  const theme = createTheme({
    palette:{
      primary:{
        main:"#21a415",
        light:"#51f346",
        dark:"#46630c"
      },
      secondary:{
        main: teal[500]
      }
    }
  });

  return (
    
      <ThemeProvider theme={theme}>
        <AppBarComp />
        <TypoButtons />
        <TextFieldComp />
        <CardGrid />
        <MakeStylesComp />
      </ThemeProvider>
   
  );
};

export default Home;
