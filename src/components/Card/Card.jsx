import css from './Card.module.css';

import { User } from '../User/User';
import { Logo } from '../Logo/Logo';

export const Card = ({ onChangeFollowers, onFollowClick, isFollowed, followers }) => {
  return (
    <div className={css.Card}>
      <Logo />
      <User 
      isFollowed={isFollowed}
      followers={followers}
      onFollowClick={onFollowClick}
      onChangeFollowers={onChangeFollowers}/>
    </div>
  );
};
