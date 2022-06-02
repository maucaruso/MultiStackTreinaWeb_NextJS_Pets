import type { NextPage } from "next";
import List from "../ui/components/List";
import Title from "../ui/components/Title";

const Home: NextPage = () => {
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

      <List
        pets={[
          {
            id: 1,
            name: 'Romena',
            history: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et.',
            photo: '/images/romena.jpeg'
          },
          {
            id: 2,
            name: 'Paradinha',
            history: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et.',
            photo: '/images/romena.jpeg'
          }
        ]}
      />
    </div>
  );
};

export default Home;
