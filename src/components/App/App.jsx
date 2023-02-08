import { Profile } from '../Profile/Profile';
import user from '../../data/user.json';
import { Statistics } from '../Statistics/Statistics';
import stats from '../../data/data.json';
import { FriendList } from '../Friends/FriendList';
import friends from '../../data/friends.json';
import { Transactions } from '../Transactions/Transactions';
import transactions from '../../data/transactions.json';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </Container>
  );
}
