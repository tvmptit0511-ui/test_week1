/*
Câu 1
*/

/*
Sai. Vì var có function scope nên chỉ có một biến i dùng chung. 
Khi setTimeout chạy sau vòng lặp, i đã thành 3 nên in ra 3, 3, 3.
*/

// Triển khai sửa code

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}