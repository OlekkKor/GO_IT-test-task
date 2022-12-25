import css from './Logo.module.css';
import logo from '../../images/Logo.png';

export const Logo = () => {
  return (
    <div className={css.Logo}>
      <img src={logo} alt="goIT logo" />
    </div>
  );
};
