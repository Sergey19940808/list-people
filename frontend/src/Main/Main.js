import React from "react";
import './Main.css';

export const Main = () => {
    return(
        <section className='main main_bg-white'>
            <section className='main__container'>
                <aside className='main__content'>
                    Вы сейчас находитесь на
                    странице приветствия и можете узнать
                    возможности сервиса
                </aside>
                <aside className='main__content'>
                    Ниже находится ссылка для
                    перехода на список пользователей,
                    с которым вы можете ознакомиться
                </aside>
                <aside className='main__content'>
                    Также вы имеете возможность
                    для сортировки этого списка в двух режимах
                    и конечно добавления собственного пользователя
                </aside>
            </section>
            <a className='main__link' href='/list_users'>
                Список пользователе
            </a>
        </section>
    )
};
