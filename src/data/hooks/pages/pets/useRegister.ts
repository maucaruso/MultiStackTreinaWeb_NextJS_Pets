import { AxiosError } from "axios";
import { useState } from "react";
import { ApiService } from '../../../services/ApiService';

export function useRegister() {
  const [name, setName] = useState("");
  const [history, setHistory] = useState("");
  const [photo, setPhoto] = useState("");
  const [message, setMessage] = useState("");

  function register() {
    if (validateForm()) {
      ApiService.post('/pets', {
        name,
        history,
        photo
      }).then(() => {
        clear();
        setMessage('Pet cadastrado com sucesso');
      }).catch((error: AxiosError) => {
        setMessage(error.response?.data.message);
      });
    } else {
      setMessage("Preencha todos os campos")
    }
  }

  function validateForm() {
    return name.length > 2 && history.length > 20 && photo.length > 5;
  }

  function clear() {
    setName('');
    setHistory('');
    setPhoto('');
  }

  return {
    name,
    history,
    photo,
    message,
    setName,
    setHistory,
    setPhoto,
    setMessage,
    register,
  };
}
