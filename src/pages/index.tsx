import type { NextPage } from "next";
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
    </div>
  );
};

export default Home;
