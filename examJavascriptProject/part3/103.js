// 객체를 배열로 변환하기(entries)
const obj = {
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: Infinity
};

const modifiedObj = Object.entries(obj);
console.log(modifiedObj);