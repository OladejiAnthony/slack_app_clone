import React, {useState, useEffect} from 'react'
import './Chat.css'
import {useParams} from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from './firebase';
import Message from './Message';
import ChatInput from './ChatInput';


function Chat() {
    const { roomId } = useParams(); //it uses the roomId to fetch the roomDetails from the database.
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomDetails(snapshot.data())
            )
        }

            db.collection('rooms')  //comment: go into the room your are in and checks the messages in it
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) =>
                    setRoomMessages(snapshot.docs.map((doc) => doc.data())
                    )
                )
    }, [roomId]);

    console.log(roomDetails);
    console.log("MESSAGES >>> ", roomMessages);

    return (
        <div className='chat'>
            <div className='chat__header'>
                <div className='chat__headerLeft'>
                    <h4 className='chat__channelName'>
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className='chat__headerRight'>
                    <p>
                        <InfoOutlinedIcon />Details
                    </p>
                </div>
            </div>

            <div className='chat__messages'>
                {/*props destructuring */}
                {roomMessages.map(({message, timestamp, user, userImage }) => (
                    <Message 
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>

             <ChatInput channelName={roomDetails?.name} channelId={roomMessages} />       


        </div>
    )
}

export default Chat;




