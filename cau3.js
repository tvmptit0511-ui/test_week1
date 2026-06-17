/*
Câu 3
*/

/*
Nhận định: "Spread Operator (...) luôn tạo deep copy hoàn toàn" 
là không đúng.

Vì spread operator chỉ tạo shallow copy (sao chép nông): các giá 
trị nguyên thủy (string, number, boolean...) được sao chép giá 
trị thực, nhưng các object hoặc mảng lồng bên trong vẫn được sao 
chép tham chiếu, không sao chép giá trị. Nói cách khác, object 
hoặc mảng con bên trong bản sao và bản gốc vẫn đang trỏ tới cùng 
một vùng nhớ.

Do đó, nếu thay đổi một object lồng bên trong bản sao, object 
tương ứng ở bản gốc cũng bị ảnh hưởng theo.
*/

// Triển khai code
const state = {
    user: 'Admin',
    privileges: ['read', 'write']
};

const newState = {
    ...state,
    privileges: [...state.privileges, 'delete']
};

console.log(state);
console.log(newState);
