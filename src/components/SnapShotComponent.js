import React from 'react';
import Chats from './Chats';
import styles from './styles.css';

export default class SnapShotComponent extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Snap getDerivedStateFromProps');
    return null;
  }

  constructor(props) {
    super(props);
    this.state = { chatList: [1, 2, 3] };
    console.log('constructor');
  }

  /**
   *
   * @param {*} prevProps
   * @param {*} prevState
   * @param {*} snapshot getSnapshotBeforeUpdate方法返回过来的值
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', this.chatThreadRef.scrollHeight);

    if (snapshot !== null) {
      const chatThreadRef = this.chatThreadRef;
      // 更新后ChatList的高度 - 之前ChatList的高度
      chatThreadRef.scrollTop = chatThreadRef.scrollHeight - snapshot;
    }
  }

  // getSnapshotBeforeUpdate 生命周期方法本身不会起什么作用，它需要与 componentDidUpdate 生命周期方法结合在一起使用。
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', this.chatThreadRef.scrollHeight);
    if (this.state.chatList > prevState.chatList) {
      const chatThreadRef = this.chatThreadRef;
      // 表示更新前ChatList的高度
      return chatThreadRef.scrollHeight - chatThreadRef.scrollTop;
    }
    return null;
    // 无论这个方法返回什么值，都会被传给另一个生命周期方法
  }

  handleClick = () => {
    const { chatList } = this.state;
    this.setState({
      chatList: [...chatList, chatList.length + 1],
    });
  };

  render() {
    console.log('render');
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Add Chat</button>
        <ul className={styles.chatThread} ref={ref => (this.chatThreadRef = ref)}>
          <Chats chatList={this.state.chatList} />
        </ul>
      </React.Fragment>
    );
  }
}
