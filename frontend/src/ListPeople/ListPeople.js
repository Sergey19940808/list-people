import React, {Component} from "react";
import axios from 'axios';
import './ListPeople.css';
import {users} from '../API/index';

export class ListPeople extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isModal: false
        }
    }

    componentWillMount() {
        axios.get(`${users['pathUsers']}`, {type: 'no_group'})
            .then((res)=>{
                this.setState({users: res.data.data})
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    notGroupingUsers = () => {
        axios.get(`${users['pathUsers']}`)
            .then((res)=>{
                this.setState({users: res.data.data})
            })
            .catch((error)=>{
                console.log(error)
            })
    };

    groupingUsers = () => {
        axios.get(`${users['pathUsersGroup']}`)
            .then((res)=>{
                this.setState({users: res.data.data})
            })
            .catch((error)=>{
                console.log(error)
            })
    };

    sorted = () => {
        axios.get(`${users['pathSorted']}`)
            .then((res)=>{
                this.setState({users: res.data.data})
            })
            .catch((error)=>{
                console.log(error)
            })
    };

    sortedReverse = () => {
        axios.get(`${users['pathSortedReverse']}`)
            .then((res)=>{
                this.setState({users: res.data.data})
            })
            .catch((error)=>{
                console.log(error)
            })
    };

    windowModal = () => {
        this.setState({isModal: ~this.state.isModal});
    };

    addUser = () => {
        const firstName = document.querySelector('input[name=first-name]');
        const lastName = document.querySelector('input[name=last-name]');
        const group = document.querySelector('input[name=group]');

        if (firstName.value !== '' && lastName.value !== '' && group.value !== '') {
            axios.post(`${users['pathAdd']}`, {
                firstName: firstName.value,
                lastName: lastName.value,
                group: group.value
            })
                .then((res) => {
                    this.setState({users: res.data.data});
                    this.setState({isModal: ~this.state.isModal});
                    firstName.value = '';
                    lastName.value = '';
                    group.value = '';
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            return null;
        }

    };

    render() {
        return(
            <section className='main main_bg-white list-people'>
                <a href='#'
                   className='list-link'
                   onClick={this.notGroupingUsers}
                >
                    Не сгруппирован
                </a>
                <a href='#'
                   className='list-link'
                   onClick={this.groupingUsers}
                >
                    Cгруппировать
                </a>
                <a href='/'
                   className='list-link'
                >
                    На главную
                </a>

                <a
                    href='#'
                    className='list-link'
                    onClick={this.windowModal}
                >
                    Добавить пользователя
                </a>

                {
                    this.state.users.map((i, index)=>{
                        return (
                            <li key={i.first_name+index} className='list-people__user'>
                                <span className='list-people__user-item'>
                                    {i.first_name}
                                </span>
                                <span className='list-people__user-item'>
                                    {i.last_name}
                                </span>
                                <span className='list-people__user-item'>
                                    {i.group}
                                </span>
                                <a href='#'
                                   className='list-link'
                                   onClick={this.sorted}
                                >
                                    А-Я
                                </a>
                                <a href='#'
                                   className='list-link'
                                   onClick={this.sortedReverse}
                                >
                                    Я-А
                                </a>
                            </li>
                        )
                    })
                }
                {
                    this.state.isModal ?
                        <section className='modal-window'>
                            <section className='modal-window__input'>
                                <label>
                                    <p>
                                        Имя:
                                        <input type='text' name='first-name' />
                                    </p>
                                </label>
                                <label>
                                    <p>
                                        Фамилия:
                                        <input type='text' name='last-name' />
                                    </p>
                                </label>
                                <label>
                                    <p>
                                        Группа:
                                        <input type='text' name='group' />
                                    </p>
                                </label>
                                <span className='modal-window__input-button'
                                      onClick={this.addUser}
                            >
                                Добавить
                            </span>
                            </section>
                        </section>
                        :
                        ""
                }
            </section>
        )
    }
}