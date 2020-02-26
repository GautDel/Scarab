import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from "../components/header/Header";
import Appointment from "../components/appointments/Appointment";


const Index = () => {

  return (
      <Container maxWidth="xl">
          <Grid container direction="column" >
              <Grid item xs={12}> 
                  <Header />
              </Grid>

              <Grid item xs={12} md={6}>
                  <Appointment />
              </Grid>
          </Grid>
      </Container>
  );
}

export default Index;
