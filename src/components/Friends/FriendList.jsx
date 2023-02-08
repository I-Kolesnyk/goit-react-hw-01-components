import PropTypes from 'prop-types';
import { FriendListItem } from '../Friends/FriendListItem';
import { FriendsList } from './Friends.styled';

export function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
