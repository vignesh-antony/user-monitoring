import { type FC } from "react";
import { useNavigate } from "react-router";

const Home: FC = () => {
  const navigate = useNavigate();

  const handleOnUsersClick = () => {
    navigate("users");
  };

  return (
    <div>
      <button onClick={handleOnUsersClick}>Navigate to user listing</button>
    </div>
  );
};

export default Home;
