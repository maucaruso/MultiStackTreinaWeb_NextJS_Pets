import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [listaPets, setListaPets] = useState<Pet[]>([]),
    [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
    [email, setEmail] = useState(""),
    [valor, setValor] = useState(""),
    [mensagem, setMensagem] = useState("");

  useEffect(() => {
    ApiService.get("/pets").then((response) => {
      setListaPets(response.data);
    });
  }, []);

  function adotar() {
    if (petSelecionado !== null) {
      if (validarDadosAdocao()) {
        ApiService.post("/adocoes", {
          pet_id: petSelecionado.id,
          email,
          valor,
        })
          .then((response) => {
            setPetSelecionado(null);
            setMensagem("Pet adotado com sucesso!");
            limparFormulario();
          })
          .catch((error: AxiosError) => {
            setMensagem(error.response?.data.message);
          });
      } else {
        setMensagem("Preencha tods os campos corretamente");
      }
    }
  }

  function limparFormulario() {
    setEmail("");
    setValor("");
  }

  function validarDadosAdocao() {
    return email.length > 0 && valor.length > 0;
  }

  return {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    email,
    setEmail,
    valor,
    setValor,
    mensagem,
    setMensagem,
    adotar,
  };
}
