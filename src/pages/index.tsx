import type { NextPage } from "next";
import { useState } from "react";
import List from "../ui/components/List";
import Title from "../ui/components/Title";
import {
  Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import { useIndex } from "../data/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    email,
    setEmail,
    valor,
    setValor,
    mensagem,
    setMensagem,
    adotar
  } = useIndex();

  return (
    <div>
      <Title
        title="Titulo da página"
        subtitle={
          <span>
            Com uma pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />

      <List pets={listaPets} onSelect={(pet) => setPetSelecionado(pet)} />

      <Dialog
        open={petSelecionado !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setPetSelecionado(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={"E-mail"}
              fullWidth
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label={"Quantia mensal"}
              fullWidth
              type={"number"}
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 5 }}>
          <Button color="secondary" onClick={() => setPetSelecionado(null)}>
            Cancelar
          </Button>

          <Button variant={"contained"} onClick={() => adotar()}>Confirmar adoção</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={mensagem.length > 0}
        message={mensagem}
        autoHideDuration={2500}
        onClose={() => setMensagem("")}
      />
    </div>
  );
};

export default Home;
