import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import {
  ListStyled,
  ItemList,
  Photo,
  Details,
  Name,
  Description,
} from "./style";
import { TextService } from "../../../data/services/TextService";

interface ListProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function List(props: ListProps) {
  const maxTextSize = 200;

  return (
    <ListStyled>
      {props.pets.map((pet) => (
        <ItemList key={pet.id}>
          <Photo src={pet.photo} alt={pet.name} />
          <Details>
            <Name>{pet.name}</Name>
            <Description>
              {TextService.limitText(pet.history, maxTextSize)}
            </Description>
            <Button
              variant={"contained"}
              fullWidth
              onClick={() => props.onSelect(pet)}
            >
              Adotar {pet.name}
            </Button>
          </Details>
        </ItemList>
      ))}
    </ListStyled>
  );
}
