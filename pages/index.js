import { useUser } from '../lib/hooks';
import HomePage from '../components/HomePage'

const Home = () => {
  const user = useUser();

  return (
    <div>
      {user ? <div>You're logged in!</div> : <HomePage />}
    </div>
  );
};

export default Home;
