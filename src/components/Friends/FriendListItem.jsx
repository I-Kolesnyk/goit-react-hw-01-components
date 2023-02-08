import PropTypes from 'prop-types';
import { FriendsListItem, Status, Avatar, FriendName } from './Friends.styled';

export function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <FriendsListItem key={id}>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </FriendsListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
