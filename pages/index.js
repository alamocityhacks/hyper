import { useUser } from '../lib/hooks';
import ChallengesPage from '../components/ChallengesPage'
import HomePage from '../components/HomePage'

const Home = () => {
  const user = useUser();

  return (
    <div>
      {user ? <ChallengesPage /> : <HomePage />}
    </div>
  );
};

export default Home;
