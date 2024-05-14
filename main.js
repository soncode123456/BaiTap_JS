// Bài 1: Tính tiền lương nhân viên
// Viết chương trình tính tiền cho nhân viên 
//Cho người dùng nhập vào số ngày làm
// Công thức tính lương: Lương 1 ngày * số ngày làm

document.getElementById('btnTinhLuong').onclick = function() {
    console.log('tôi là nút tính lương');
    // input: luong1Ngay: number, soNgayLam: number
    let luong1Ngay = 100000;
    let soNgayLam = document.getElementById('soNgayLam').value * 1;
    console.log(soNgayLam);

    //Output: tongLuong: number
    let tongLuong = 0;
    tongLuong = luong1Ngay * soNgayLam;

    //progress
    document.getElementById('tongLuong').innerHTML = `Số tiền lương tháng này bạn nhận được là: ${tongLuong.toLocaleString()} VND`;
}

/////////////////////////////////////////////////////////////////

// Bài tập 2: Tính giá trị trung bình 
// Viết chương trình nhập vào 5 số thực
// Tính giá trị trung bình của 5 số này và xuất ra màn hình

// Gợi ý: Giá trị trung bình là tổng 5 số của người dùng nhập chia cho 5.


document.getElementById('btnTinhGiaTriTrungBinh').onclick = function () {
    //Input: Lấy giá trị từ các ô nhập liệu
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let number3 = parseFloat(document.getElementById('number3').value);
    let number4 = parseFloat(document.getElementById('number4').value);
    let number5 = parseFloat(document.getElementById('number5').value);

    // Kiểm tra nếu có giá trị nào không phải là số
    if (isNaN(number1) || isNaN(number2) || isNaN(number3) || isNaN(number4) || isNaN(number5)) {
        alert("Vui lòng nhập tất cả các giá trị là số thực.");
        return;
    }

    // Tính tổng các số
    let tongCacSo = number1 + number2 + number3 + number4 + number5;

    //Output: Tính giá trị trung bình
    let giaTriTrungBinh = tongCacSo / 5;

    // Hiển thị kết quả
    document.getElementById('ketQua').innerHTML = "Giá trị trung bình của 5 số thực là: " + giaTriTrungBinh;
}

/////////////////////////////////////////////////////

//Bài tập 3: Quy đổi tiền:
// Giá USD hiện nay đang là 23.500 VND
// Viết chương trình quy đổi từ USD sang VND.
// Cho người dùng nhập vào số tiền USD.
// Tính và xuất ra số tiền sau quy đổi VND.

// Ví dụ: Cho người dùng nhập 2 USD => Xuất ra 47.000 VND

// Tỷ giá chuyển USD sang VND
const tyGia = 23500;

document.getElementById('btnQuyDoi').onclick = function () {
    //input: Lấy giá trị từ ô nhập liệu (number)
    let soTienUsd = parseFloat(document.getElementById('soTienUsd').value);

    // Kiểm tra nếu giá trị không phải là số hoặc nhỏ hơn 0
    if (isNaN(soTienUsd) || soTienUsd < 0) {
        alert("Vui lòng nhập số tiền USD hợp lệ.");
        return;
    }

    //Output: Tính số tiền sau quy đổi sang VND (number)
    let soTienVnd = soTienUsd * tyGia;

    // Hiển thị kết quả
    document.getElementById('ketQua1').innerHTML = `Số tiền sau quy đổi là: ${soTienVnd.toLocaleString()} VND`;
}

//////////////////////////////////////////////////////////

// Bài tập 4: Tính diện tích, chu vi hình chữ nhật
// Viết chương trình nhập vào 2 chiều và chiều rộng của HCN 
// Tính và xuất ra diện tích, chu vi của HCN đó. 

// Công thức:
//         + Diện tích = dai * rong
//         + Chu vi = (dai + rong) * 2

//DIÊN TÍCH VÀ CHU VI
document.getElementById('btnDienTich').onclick = function () {
    //input: Lấy giá trị từ ô nhập liệu (number)
    let chieuDai = document.getElementById('chieuDai').value * 1;
    let chieuRong = document.getElementById('chieuRong').value * 1;
    // console.log(chieuDai);
    // console.log(chieuRong);

    // Kiểm tra nếu có giá trị nào không phải là số
    if (isNaN(chieuDai) || chieuDai < 0|| isNaN(chieuRong) || chieuRong < 0) {
        alert("Vui lòng nhập sô chiều dài và chiều rộng hợp lệ.");
        return;
    }

    //Output: Diện tích và chu vi
    let dienTich = 0;
    let chuVi = 0;

    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai + chieuRong) * 2;
    

    //Hiển thị kết quả ra màn hình
    document.getElementById('ketQua2').innerHTML = `Diện tích của hình chữ nhật là: ${dienTich.toLocaleString()}, Chu vi của hình chữ nhật là: ${chuVi.toLocaleString()}`;
}

/////////////////////////////////////////////////
// Bài 5: Tính tổng 2 ký số
// Viết chương trình nhập vào 1 số có 2 chữ số (VD: 12,44,83)
// Tính tổng 2 ký số của số vừa nhập.
// Ví dụ:
//     + 12 => Tổng là 1 + 2 = 3
//     + 44 => Tổng là 4 + 4 = 8

// Gợi ý: 
// Cách lấy số hàng đơn vị: int so_hang_dv = so % 10;
// Cách lấy số hàng chục: int so_hang_chuc = so / 10;

document.getElementById('btnTinh').onclick = function () {
    //input: Lấy giá trị từ ô nhập liệu (number)
    // let so = 0;
    let so = document.getElementById('so').value * 1;

    let so_hang_dv = Math.floor(so % 10);
    let so_hang_chuc = Math.floor(so / 10);
    
    console.log(so_hang_dv);
    console.log(so_hang_chuc);

    //Output
    let tongKySo = 0;
    tongKySo = so_hang_dv + so_hang_chuc;
    console.log(tongKySo);

    //Hiển thị ra màn hình
    document.getElementById('tongKySo').innerHTML = `Tổng 2 ký số là : ${tongKySo.toLocaleString()}`;
}