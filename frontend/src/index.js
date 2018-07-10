import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import {Main} from "./Main/Main";
import {ListPeople} from "./ListPeople/ListPeople";

ReactDOM.render(
    <BrowserRouter>
        <section>
            <Route exact path='/' component={Main} />
            <Route exact path='/list_users' component={ListPeople} />
        </section>
    </BrowserRouter>,
    document.querySelector('.root')
);
