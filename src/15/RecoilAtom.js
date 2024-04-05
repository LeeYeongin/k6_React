import {atom, selector} from 'recoil';

// 함수가 아닌 변수
export const rcnt = atom({
    key : 'rcnt',
    default : 10
}); // object가 인수로 들어가야함

export const rcnt2 = selector({ 
    key:'rcnt2',
    get: ({get}) => {
        return get(rcnt) * 2 // rcnt값이 바뀌면 자동으로 2배
    }
});