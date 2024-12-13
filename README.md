
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

## **Sử dụng**

### **1. Khởi động server backend**

```bash
npm start
```

### **2. Khởi động frontend**

```bash
npm start
```
# Chức năng Đăng nhập
### **3. Quá trình đăng nhập**

- Mở ứng dụng trong trình duyệt (`http://localhost:3000` cho frontend).
- Sử dụng thông tin đăng nhập thử nghiệm sau (hoặc đăng ký tài khoản mới):
  - **Email:** test123@gmail.com
  - **Password:** 123456
- Gửi biểu mẫu và kiểm tra phản hồi.

---

## **API Endpoints**

- API Login : http://localhost:5000/login

### **POST /login**

#### **Body yêu cầu:**

```json
{
  "email": "test123@gmail.com",
  "password": "123456"
}
```

#### **Phản hồi:**

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
# Chức năng quên mật khẩukhẩu
### **3. Quá trình quên mật khẩukhẩu**

- Mở ứng dụng trong trình duyệt (`http://localhost:3000/forgetPasswordforgetPassword` cho frontend).
- Sử dụng thông tin emailemail thử nghiệm sau :
  - **Email:** test123@gmail.com
- Gửi biểu mẫu và kiểm tra phản hồi.

---

## **API Endpoints**

- API sendotp : http://localhost:5000/sendotp
- API verifyotp : http://localhost:5000/verifyotp
- API changepassword : http://localhost:5000/changepassword

## **Tổng quan**

Chức năng quên mật khẩu giúp người dùng khôi phục lại mật khẩu khi bị quên, với quy trình gồm gửi OTP qua email và thiết lập mật khẩu mới.



---

## **Tính năng**

- Gửi OTP tới email người dùng.
- Xác minh OTP trên giao diện.
- Xử lý lỗi như OTP không đúng hoặc email không tồn tại.
- Thiết lập mật khẩu mới khi OTP hợp lệ.

## **Yêu cầu**
- Gửi email qua SMTP (NodeMailer).
---
### **POST /sendotp**

#### **Body yêu cầu:**

```json
{
  "email": "test123@gmail.com",
}
```

#### **Phản hồi:**

- **Thành công (200):**

```json
{
  "Gửi otp thành công"
}
```
### **POST /verifyotp**

#### **Body yêu cầu:**

```json
{
  "otp": 123456123456,
}
```

#### **Phản hồi:**

- **Thành công (200):**

```json
{
  "Xác nhận otp thành công"
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
- NodeMailer để gửi emailemail

---
