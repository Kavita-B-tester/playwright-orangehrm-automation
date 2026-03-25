# Playwright UI Automation Framework – OrangeHRM

## 📌 Project Overview

This project demonstrates a UI automation framework built using **Playwright with JavaScript**, implementing the **Page Object Model (POM)** design pattern.

The framework automates key workflows of the OrangeHRM application.

---

## 🚀 Tech Stack

* Playwright
* JavaScript (Node.js)
* Page Object Model (POM)

---

## 📂 Project Structure

```
tests/
pages/
utils/
playwright.config.js
```

---

## ✅ Test Scenarios Covered

1. Login and Logout functionality
2. Invalid Login validation
3. Employee End-to-End Flow:

   * Add Employee
   * Save Employee Details
   * Search Employee
   * Delete Employee

---

## ⚙️ Features Implemented

* Page Object Model (POM)
* Test Data Management
* Positive & Negative Scenarios
* Error Handling
* Playwright Test Runner
* HTML Reports

---

## ▶️ How to Run Tests

```bash
npm install
npx playwright test
```

---

## 📊 Test Reports

```bash
npx playwright show-report
```

---

## ⚠️ Known Issues / Improvements

* Employee search functionality may fail due to dynamic UI behavior and autocomplete handling.
* Can be improved with better synchronization and unique test data strategy.
* API-based validation can enhance reliability.

---

## 🎯 Future Enhancements

* API Automation Integration
* CI/CD Pipeline (GitHub Actions)
* Cross-browser testing

---

## 👩‍💻 Author

Kavita Banakar

