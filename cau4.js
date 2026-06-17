/*
Câu 5
*/

/*
Nhận định: "Khi gọi createOrderMessage('Hải', null, 'Bàn phím cơ'), 
tham số status sẽ tự nhận giá trị mặc định là 'pending'" là không 
đúng.

Vì giá trị mặc định (default parameter) chỉ được áp dụng khi tham 
số truyền vào là undefined. Còn null được xem là một giá trị hợp 
lệ được truyền vào một cách chủ động, nên status sẽ nhận giá trị 
null, không nhận giá trị mặc định.

Sở dĩ có sự khác biệt này là vì trong JavaScript, null là giá trị 
được gán chủ động vào biến để biểu thị "rỗng có chủ đích", còn 
undefined đại diện cho một biến đã được khai báo nhưng chưa được 
gán giá trị nào.
*/

// Triển khai hàm

function createOrderMessage(user, status = "pending", ...items) {

    if (items.length === 0) {
        return `Khách hàng ${user} có đơn hàng ${status} nhưng giỏ hàng trống.`;
    }

    return `Khách hàng ${user} có đơn hàng ${status} gồm các món: ${items.join(", ")}.`;
}

console.log(createOrderMessage("Tuấn", undefined, "Laptop", "Chuột"));
console.log(createOrderMessage("Lan", "completed"));
console.log(createOrderMessage("Hải", null, "Bàn phím cơ"));