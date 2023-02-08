import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  StatsListItem,
  Label,
  Quantity,
} from './Profile.styled';

export function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <StatsList>
        <StatsListItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsListItem>
        <StatsListItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsListItem>
        <StatsListItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsListItem>
      </StatsList>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
