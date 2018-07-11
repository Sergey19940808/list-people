const host = 'http://localhost:8000/';
const app = 'users/';

const list = 'list/';
const listUsers = 'list_group/';

const sorted = 'sorted/';
const sortedReverse = 'sorted_reverse/';

const add = 'add/';

export const users = {
    pathUsers: `${host}${app}${list}`,
    pathUsersGroup: `${host}${app}${listUsers}`,
    pathSorted: `${host}${app}${sorted}`,
    pathSortedReverse: `${host}${app}${sortedReverse}`,
    pathAdd: `${host}${app}${add}`,
};