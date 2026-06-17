/*
Câu 2
*/

/*
Nhận định "Chỉ cần dùng duy nhất hàm map() kết hợp với if 
là có thể trả về mảng user thỏa mãn role = 'admin' 
và active = true" là không đúng.

Vì map() chỉ dùng để biến đổi từng phần tử trong mảng (số lượng 
phần tử đầu ra luôn bằng số lượng phần tử đầu vào), không phù hợp 
để lọc bỏ những phần tử không thỏa điều kiện.

Do đó, nên dùng filter() để lấy ra các phần tử thỏa điều kiện 
mong muốn.
*/

// Triển khai code
const users = [
    { id: 1, role: 'admin', active: true },
    { id: 2, role: 'user', active: false },
    { id: 3, role: 'admin', active: true }
];

const result = users.filter(
    user => user.role === 'admin' && user.active
);

console.log(result);
