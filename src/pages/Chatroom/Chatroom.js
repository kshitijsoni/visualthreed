import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "User 1",
                content: <p>Hello World!</p>,
            }, {
                username: "User 2",
                content: <p>Hiiii</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "User 1",
                content: <p>How you doin..</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "John Deo",
                content: <p>This site is dope</p>,
                img: "http://i.imgur.com/ARbQZix.jpg",
            }, {
                username: "User 1",
                content: <p>So</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "User 1",
                content: <p>The site is really easy to use</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "User 1",
                content: <p>The UI of the site is great!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "User 2",
                content: <p>Hi, can someone help me?</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "User 1",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "User 1";
        const { chats } = this.state;

        return (
            <div className="pt-16 bg-homeImg h-screen grid place-content-center w-full">
                <div className="chatroom">
                    <ul className="chats" ref="chats">
                        {
                            chats.map((chat) =>
                                <Message chat={chat} user={username} />
                            )
                        }
                    </ul>
                    <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                        <input type="text" ref="msg" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Chatroom;
