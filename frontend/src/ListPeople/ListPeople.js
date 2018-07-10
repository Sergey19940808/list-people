import React, {Component} from "react";
import './ListPeople.css';

export class ListPeople extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    firstName: 'Sergey',
                    lastName: 'Alekseev',
                    group: 'manager'
                }
            ]
        }
    }
    
    render() {
        return(
            <section className='main main_bg-white list-people'>
                {
                    this.state.users.map((i)=>{
                        return (
                            <li key={i.firstName} className='list-people__user'>
                                <span className='list-people__user-item'>
                                    {i.firstName}
                                </span>
                                <span className='list-people__user-item'>
                                    {i.lastName}
                                </span>
                                <span className='list-people__user-item'>
                                    {i.group}
                                </span>
                            </li>
                        )
                    })
                }
            </section>
        )
    }
}