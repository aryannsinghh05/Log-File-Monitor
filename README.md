# Log File Monitor

A web application that analyzes server log files and categorizes log messages into **INFO**, **WARNING**, and **ERROR** levels.
The tool helps developers quickly understand issues inside large log files without manually scanning thousands of lines.

---

## 🚀 Features

* Upload `.log` or `.txt` files
* Automatically detects:

  * **INFO** logs
  * **WARNING** logs
  * **ERROR** logs
* Displays a **count summary dashboard**
* Click on a category to view **detailed log entries**
* Clean and interactive UI

---

## 🛠 Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript

**Backend**

* Node.js
* Express.js

**Other Tools**

* Multer (for file uploads)
* File System module (`fs`) for reading log files

---

## 📂 Project Structure

```
log-file-monitor
│
├── server.js
├── package.json
├── package-lock.json
├── uploads/
│
├── public
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/log-file-monitor.git
```

2. Navigate into the project folder

```
cd log-file-monitor
```

3. Install dependencies

```
npm install
```

4. Start the server

```
node server.js
```

5. Open the browser

```
http://localhost:3000
```

---

## 📊 How It Works

1. User uploads a log file.
2. Backend reads the file and splits it into lines.
3. Each line is checked for keywords:

   * INFO
   * WARNING
   * ERROR
4. Results are sent back to the frontend and displayed in a dashboard.

---

## 💡 Example Log File

```
INFO Server started
WARNING CPU usage high
ERROR Database connection failed
ERROR Timeout while connecting to API
INFO User login successful
```

Output:

```
INFO: 2
WARNING: 1
ERROR: 2
```

---

## 🔮 Future Improvements

Possible enhancements for the project:

* Real-time log monitoring
* Log search functionality
* Error trend visualization (charts)
* Timestamp filtering
* Deployment with cloud hosting
---
Code By
Aryan Singh

---
