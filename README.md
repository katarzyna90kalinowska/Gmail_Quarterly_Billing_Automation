# Gmail Quarterly Billing Automation

Automated mailing system built using **Google Sheets** and **Google Apps Script** to streamline quarterly billing communications with suppliers and producers.

## 📋 Overview & Business Value
Manually sending repetitive billing reminders via bulk or BCC methods lacks personalization and is difficult to track. This automation shifts the process to a structured, auditable workflow:
* **Direct Communication:** Sends individual, professional emails directly to each supplier ("To" field).
* **Automated Audit Trail:** Once an email is dispatched, the script automatically updates the status column in Google Sheets to `Wysłane` (Sent) and records the exact timestamp.
* **Compliance & Professionalism:** Automatically appends full corporate branding, contact details, KSeF notices, and GDPR (RODO) clauses.

## 🛠️ Tech Stack
* **Google Sheets:** Central operational database.
* **Google Apps Script (JavaScript):** Automation engine handling conditional loops, Gmail API integration, and real-time sheet updates.

## 🚀 How It Works
1. Maintain the supplier database in Google Sheets with columns: `Nazwa_Producenta`, `Email`, `Status_Wysylki`, `Data_Wysylki`.
2. Set the status to `Oczekuje` for suppliers requiring a reminder.
3. Run the script (`wyslijMaileKwartalne`) to automatically process the queue, dispatch emails via Gmail, and log the timestamps.
