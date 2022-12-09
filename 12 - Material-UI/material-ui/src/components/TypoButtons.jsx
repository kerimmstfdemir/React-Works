import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        {/*//* "variant" ve "component" modülerlik sağlar */}
        <Typography variant="h4" component="h6" align="center" mt={4} color="error">MUI Typography</Typography>

        <Typography variant="body2" align="justify" mt={4} sx={{ backgroundColor: "lightgreen", color: "#eee", fontSize: "1.4rem" }}>MUI Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti cumque beatae expedita nobis voluptas dolorem nam error cum. Eligendi?</Typography>

        <Typography variant="button" sx={{ display: "inline-block", marginTop: "2rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit minus esse voluptatibus! Consectetur eius porro quae quibusdam expedita veritatis blanditiis facere neque, vel totam. Odio accusantium pariatur consequuntur tempore.</Typography>
      </Container>

      <Container>
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"0.5rem", textAlign:"center"}}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
        Send
      </Button>
        </Box>
      </Container>
    </>
  )
};

export default TypoButtons;
