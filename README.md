# Crypto Exchange API System

ระบบ API สำหรับจำลองตลาดซื้อขาย Cryptocurrency เช่น BTC, ETH, XRP และ DOGE

---

## สดงขั้นตอนการ Run project

### 1. Clone Repo

```bash
git clone https://github.com/Evrp/Cryptocurrency.git
cd Cryptocurrency
```

### 2. ติดตั้ง Dependencies

```bash
npm install
```

### 3. ตั้งค่าไฟล์ฐานข้อมูล

เปิด `config/config.json` และตั้งค่าตาม MySQL ที่ใช้งาน เช่น:

```json
"development": {
  "username": "root",
  "password": "yourpassword",
  "database": "database_development",
  "host": "127.0.0.1",
  "dialect": "mysql"
}
```

### 4. สร้างฐานข้อมูล

```bash
npx sequelize-cli db:create
```

### 5. รัน Migration เพื่อสร้างตาราง

```bash
npx sequelize-cli db:migrate
```

### 6. ใส่ข้อมูลตัวอย่าง (Seed)

```bash
npx sequelize-cli db:seed:all
```

### 7. รันเซิร์ฟเวอร์

```bash
npm start
```

---

## 📮 ตัวอย่างการทดสอบ API ด้วย Postman

### 🔹 สร้างคำสั่งซื้อ (POST /orders)

- **URL**: `http://localhost:3000/orders`
- **Method**: `POST`
- **Headers**:

```json
Content-Type: application/json
```

- **Body (raw JSON)**:

```json
{
  "user_id": 1,
  "order_type": "BUY",
  "currency_pair": "BTC/THB",
  "amount": 0.01,
  "price": 1000000
}
```

### 🔹 เรียกดูรายการคำสั่งซื้อทั้งหมด (GET /orders)

- **URL**: `http://localhost:3000/orders`
- **Method**: `GET`

```json
[
  {
    "id": 1,
    "order_type": "BUY",
    "currency_pair": "BTC/THB",
    "amount": 0.5,
    "price": 1000000,
    "status": "OPEN",
    "createdAt": "2025-06-27T21:30:17.000Z",
    "updatedAt": "2025-06-27T21:30:17.000Z",
    "UserId": null,
    "User": null
  },
  {
    "id": 2,
    "order_type": "BUY",
    "currency_pair": "BTC/THB",
    "amount": 0.6,
    "price": 2000000,
    "status": "OPEN",
    "createdAt": "2025-06-27T21:30:37.000Z",
    "updatedAt": "2025-06-27T21:30:37.000Z",
    "UserId": null,
    "User": null
  }
]
```
