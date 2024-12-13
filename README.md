
## **Tổng quan**

Đây là một tính năng đăng nhập đơn giản được xây dựng bằng [React và Nodejs].

---

## **Tính năng**

- Xác thực người dùng bằng email và mật khẩu.
- Kiểm tra tính hợp lệ của trường nhập liệu.
- Lưu trữ token an toàn JWT.
- Chuyển hướng và lưu trữ thông tin người dùng vào localStorage người dùng sau khi đăng nhập thành công.
- Xử lý lỗi khi thông tin đăng nhập không đúng hoặc xảy ra sự cố mạng.

---

## **Yêu cầu**

Đảm bảo các công cụ sau đã được cài đặt:

- [Node.js](https://nodejs.org/) (cho dự án backend) và [React](https://react.dev/) (cho dự án frontend).
- Sử dụng UI [Elastic UI](https://eui.elastic.co/#/) (cho thiết kế giao diện)
- Trình quản lý gói như `npm` hoặc `yarn`.
- Một cơ sở dữ liệu (MongoDB Atlas).

---

## **Cài đặt**

### **1. Sao chép kho lưu trữ**

```bash
git clone https://github.com/viethoang5426/demo
cd demo
```

### **2. Cài đặt các phụ thuộc**

Đối với frontend:

```bash
cd frontend
npm install
```

Đối với backend:

```bash
cd api
npm install
```
---

## **Sử dụng**

### **1. Khởi động server backend**

```bash
npm start
```

### **2. Khởi động frontend**

```bash
npm start
```
---

## **Chức năng**

### 1. Đăng nhập

- Mở ứng dụng trong trình duyệt (`http://localhost:3000` cho frontend).
- Sử dụng thông tin đăng nhập thử nghiệm sau (hoặc đăng ký tài khoản mới):
  - **Email:** test123@gmail.com
  - **Password:** 123456
- Gửi biểu mẫu và kiểm tra phản hồi.

####  **API Endpoints**
##### **POST /login**
**Body yêu cầu:**

```json
{
  "email": "test123@gmail.com",
  "password": "123456"
}
```

**Phản hồi:**

- **Thành công (200):**

```json
{
  "Message": "Đăng nhập thành công",
  "token": "jwt-token",
  "user": {
    "id": "12345",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

- **Thất bại (400):**

```json
{
  "Message": "Email chưa đăng kí",
}
```


- **Thất bại (400):**

```json
{
  "Message": "Mật khẩu chưa chính xác",
}
```




### 2. Đăng kí

 - Cho phép người dùng đăng ký tài khoản mới trên hệ thống. API để nhận thông tin cơ bản từ người dùng, thực hiện xác thực đầu vào, lưu trữ dữ liệu vào cơ sở dữ liệu, và trả về kết quả đăng ký.




#### **API Endpoints**

##### **POST /signup**

**Body yêu cầu:**

```json
{
  "email": "test123@gmail.com",
  "password": "123456",
  "user" : "test123",
}
```

**Phản hồi:**

- **Thành công (200):**

```json
{
  "Message": "Đăng nhập thành công",
  "token": "jwt-token",
  "user": {
    "id": "12345",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

- **Thất bại (400):**

```json
{
  "Message": "Email đã tồn tại",
}
```


### 3. Quên mật khẩu

- Tính năng "Quên mật khẩu" hỗ trợ người dùng lấy lại quyền truy cập tài khoản khi không nhớ mật khẩu, sau khi nhập email đã đăng kí, người dùng tiến hành xác nhập OTP là 6 chữ số ngẫu nhiên đã gửi vào email đó ( Mỗi OTP tồn tại trong 1 phút ) , nếu OTP chính xác, người dùng nhập mật khẩu mới .

#### **API Endpoints**

- API sendotp : http://localhost:5000/sendotp

  Gửi OTP đến gmail người dùng

- API verifyotp : http://localhost:5000/verifyotp
 
  Xác nhận OTP người dùng đã nhập đúng với OTP đang có sẵn ứng với email người dùngdùng
 
- API changepassword : http://localhost:5000/changepassword

  Cập nhật mật khẩu mới 

##### **POST /sendotp**

**Body yêu cầu:**

```json
{
  "email": "test123@gmail.com",
}
```

**Phản hồi:**

- **Thành công (200):**

```json
{
  "Gửi otp thành công"
}
```
##### **POST /verifyotp**

**Body yêu cầu:**

```json
{
  "otp": 123456123456,
}
```

**Phản hồi:**

- **Thành công (200):**

```json
{
  "Xác nhận otp thành công"
}
```
##### **POST /sendotp**

**Body yêu cầu:**

```json
{
  "email": "test123@gmail.com",
}
```

**Phản hồi:**

- **Thành công (200):**

```json
{
  "Gửi otp thành công"
}
```
##### **POST /changepassword**

**Body yêu cầu:**

```json
{
  "email" : "test123@gmail.com",
  "newPassword" : "456"
}
```

**Phản hồi:**

- **Thành công (200):**

```json
{
  "Đổi mật khẩu thành công"
}
```

## **Cấu trúc thư mục**

```
demo/
├── api/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── routes/
│   ├── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── context/
|   |   |    └── AuthContext.js
│   |   └── Util
|   ├── App.js
│   └── index.js
└── README.md
```

---

## **Công nghệ sử dụng**

### Frontend:

- React
- Context API để quản lý trạng thái
- Axios
- Elastic UI

### Backend:

- Node.js với Express.js
- JWT để xác thực
- Mongo Atlas
- NodeMailer để gửi email

---
