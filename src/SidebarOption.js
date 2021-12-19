import React from 'react'
import './SidebarOption.css'
import {useHistory} from "react-router-dom";
import db from './firebase';

function SidebarOption({ Icon, title, id, addChannelOption }) {  //comment: React props destructuring
    const history = useHistory(); //comment: it keeps trackrecords of the links you clicked or pages you go to

    const selectChannel = () => { //comment: when you click selectChannel, it either takes you to the roomId or dispalay the title
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push(title)
        }
    };

    const addChannel = () => {
        const channelName = prompt('Please enter a new channel name ');

        if (channelName) { //comment: when you get here, go to the rooms collection inside db and add a new channelName
            db.collection('rooms').add({
                name: channelName,
            })
        }
    };

    return (
        <div  className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel }>   {/*comments: when you click addChannelOptions: it displays addChannel or selectChannel */}
            {Icon && <Icon className='sidebarOption__icon' /> } 
               {/*comment: if you pass me an Icon-props in Sidebar.js, then render out or display the icon-image */}
            {Icon ? (
                <h3>{title}</h3>
                ) : (<h3 className='sidebarOption__channel'>
                        <span className='sidebarOption__hash'>#</span>{title}
                    </h3>) 
            }
                {/*Ternary Operator comment: if you pass me an Icon-props in Sidebar.js, then render out the title-props also, if not render or display it out as a channel with the #-tag and title-props  */}
        </div>
    )
}

export default SidebarOption;
