import { Pet } from "./Pet";

export interface Report {
  id: number;
  email: string;
  valor: string;
  pet: Pet;
}