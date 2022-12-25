import { Component } from 'react';
import { Card } from './Card/Card';

export class App extends Component {
  state = {
    isFollowed: false,
    followers: 100500,
  };

  componentDidMount() {
    const initialContact = localStorage.getItem('follow');
    const parsedContact = JSON.parse(initialContact);
    if (parsedContact) {
      this.setState({
        isFollowed: parsedContact.isFollowed,
        followers: parsedContact.followers,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    return localStorage.setItem('follow', JSON.stringify(this.state));
  }

  onFollowClick = () => {
    this.setState(prevState => {
      return { isFollowed: !prevState.isFollowed };
    });
    console.log(this.state.isFollowed);
    this.onChangeFollowers();
  };

  onChangeFollowers = () => {
    this.state.isFollowed
      ? this.setState(prevState => ({ followers: prevState.followers - 1 }))
      : this.setState(prevState => ({ followers: prevState.followers + 1 }));
  };

  render() {
    return (
      <Card
        isFollowed={this.state.isFollowed}
        followers={this.state.followers}
        onFollowClick={this.onFollowClick}
        onChangeFollowers={this.onChangeFollowers}
      />
    );
  }
}
