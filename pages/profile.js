import { useUser } from '../lib/hooks';
import Nav from '../components/Nav';
import HeadObject from '../components/Head';
import Footer from '../components/Footer';

const Profile = () => {
  const user = useUser({ redirectTo: '/login' });

  return (
    <div>
      {user && (
        <>
          <HeadObject />
          <Nav />
          <div className="font-inter max-w-xl mx-6 md:mx-auto mt-16 bg-black bg-opacity-5 rounded-xl relative z-30 p-8 flex flex-col space-y-4">
            <h1 className="font-bold text-4xl">Group Info</h1>
            { user.userInfo.points ? <div className="text-center py-5 border-2 rounded-xl md:w-4/12">
              <div className="font-rubik text-7xl font-black">
                {user.userInfo.points["N"]}
              </div>
              <h3 className="font-rubik uppercase text-4xl font-bold">Points</h3>
            </div> : '' }
            <div>
              <h3 className="font-bold">Ethereum Blockchain Issuer ID</h3>
              <div className="break-words"><code>{user.issuer}</code></div>
            </div>
            { user.userInfo.admin ? <div>
              <h3 className="font-bold">Group Name</h3>
              {user.userInfo.admin["BOOL"] ? 'Admin' : user.userInfo.name["S"]}
            </div> : '' }
            <div>
              <h3 className="font-bold">Email</h3>
              {user.email}
            </div>
            { user.userInfo.completedChallenges && user.userInfo.challenges ? <div>
              <h3 className="font-bold">Completed Challenges</h3>
              <div className="mt-2 flex flex-wrap">
                {Array.from({ length: user.userInfo.challenges["N"] }, (_, i) => i + 1).sort(((a, b) => a - b)).map((number) => (
                  <div className={`mr-2 mb-2 border-transparent inline-block px-3 font-bold font-3xl ${user.userInfo.completedChallenges["NS"].map(Number).includes(number) ? 'bg-green bg-opacity-20' : 'bg-black bg-opacity-10'} rounded-lg`}>
                    {number}
                  </div>
                ))}
              </div>
            </div> : '' }
            { user.userInfo.groupMembers ? <div>
              <h3 className="font-bold">Group Members</h3>
              <div className="mt-2 flex flex-wrap">
                {user.userInfo.groupMembers["SS"].sort().map((name) => (
                    <div className="mr-2 mb-2 border-transparent inline-block px-3 font-bold font-3xl bg-black bg-opacity-10 rounded-lg" style={{ backgroundColor: '#' + toHex(name).substring(9, 13) + 'FF', color: 'white' }}>
                      {name}
                    </div>
                ))}
              </div>
            </div> : '' }
            { user.userInfo.roles ? <div>
              <h3 className="font-bold">Roles</h3>
              { user.userInfo.roles["SS"].map(role => (
                <div className="capitalize mr-2 my-2 border-transparent inline-block px-3 font-bold font-3xl bg-black bg-opacity-10 rounded-lg">
                  {role}
                </div>
              ))
              }
            </div> : '' }
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Profile;

function toHex(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  return result;
}