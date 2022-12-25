import { Component } from 'react';
import css from './User.module.css';
import imgUser from '../../components/images/Hansel.svg';

export class User extends Component {
  render() {
    const usersFollow =
      String(this.props.followers).slice(0, 3) +
      ',' +
      String(this.props.followers).slice(3);

    return (
      <div className={css.User}>
        <span className={css.Line}></span>
        <div className={css.Userimg}>
          <img src={imgUser} alt="user pic" className={css.UserSvg} />
        </div>
        <p className={css.Media}>777 tweets</p>
        <p className={css.Media}>{usersFollow} followers</p>

        <button
          onClick={this.props.onFollowClick}
          className={this.props.isFollowed ? css.Active : css.Button}
          type="button"
          aria-label="following button"
        >
          {this.props.isFollowed ? 'Following' : 'Follow'}
        </button>
      </div>
    );
  }
}

// export class User extends Component {
//   state = {
//     isFollowed: false,
//     followers: 100500,
//   };

//   componentDidMount() {
//     const initialContact = localStorage.getItem('follow');
//     const parsedContact = JSON.parse(initialContact);
//     if (parsedContact) {
//       this.setState({
//         isFollowed: parsedContact.isFollowed,
//         followers: parsedContact.followers,
//       });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     return localStorage.setItem('follow', JSON.stringify(this.state));
//   }

//   onFollowClick = () => {
//     this.setState(prevState => {
//       return { isFollowed: !prevState.isFollowed };
//     });
//     console.log(this.state.isFollowed);
//     this.onChangeFollowers();
//   };

//   onChangeFollowers = () => {
//     {
//       this.state.isFollowed
//         ? this.setState(prevState => ({ followers: prevState.followers - 1 }))
//         : this.setState(prevState => ({ followers: prevState.followers + 1 }));
//     }
//   };

//   render() {
//     const usersFollow =
//       String(this.state.followers).slice(0, 3) +
//       ',' +
//       String(this.state.followers).slice(3);
//     return (
//       <div className={css.User}>
//         <span className={css.Line}></span>
//         <div className={css.Userpic}>
//           <img src={imgUser} alt="user pic" className={css.UserSvg} />
//         </div>
//         <p className={css.Media}>777 tweets</p>
//         <p className={css.Media}>{usersFollow} followers</p>

//         <button
//           onClick={this.onFollowClick}
//           className={this.state.isFollowed ? css.Active : css.Button}
//           type="button"
//           aria-label="following button"
//         >
//           {this.state.isFollowed ? 'Following' : 'Follow'}
//         </button>
//       </div>
//     );
//   }
// }
