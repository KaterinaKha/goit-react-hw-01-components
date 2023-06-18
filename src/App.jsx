import user from './data/user.json';
import { Profile } from './components/Profile/Profile';
import data from './data/data.json';
import { Statistics } from 'components/Statistics/Statistics';
import friends from './data/friends.json';
import { FriendsList } from 'components/FriendsList/FriendList';
import transactions from './data/transactions.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
