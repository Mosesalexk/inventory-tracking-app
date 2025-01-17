# Inventory Tracking Application

This project is a cloud-based inventory tracking application designed to manage laptops by tracking their status and return dates. It includes a static web application hosted on AWS S3, a backend Lambda function for overdue notifications, and a CI/CD pipeline using AWS services.

---

## Features

### Static Web Application
- **User Interaction:** Add and view laptops in the inventory.
- **Laptop Details:**
  - Asset Number
  - Status: "In Stock" or "Deployed"
  - Return Date (if deployed)
- **Technology:** HTML, CSS, JavaScript.
- Hosted on Amazon S3 with public access.

### Backend (AWS Lambda)
- Automatically sends weekly email notifications for laptops with overdue return dates.
- Utilizes AWS SES (Simple Email Service) for email notifications.

### CI/CD Pipeline
- Automated pipeline built with AWS CodePipeline and CodeBuild.
- Source code is hosted on GitHub.
- Artifacts are stored in an S3 bucket.
- Deploys the static web app to the S3 bucket.

---

## Project Structure

```plaintext
inventory-app/
├── static/                # Static web files
│   ├── index.html         # Main HTML file
│   ├── app.js             # JavaScript file for app logic
│   ├── styles.css         # CSS for styling
├── lambda/                # Lambda function code
│   ├── notify_overdue.js  # Code for sending email reminders
├── README.md              # Project documentation
├── .gitignore             # Ignored files
```

---

## Deployment Instructions

### Prerequisites
1. **AWS Account:** Ensure you have an active AWS account.
2. **AWS CLI:** Installed and configured on your machine.
3. **GitHub Repository:** Clone this repository or create your own.

### Deployment Steps

#### 1. Deploy Static Web App to S3
1. Create an S3 bucket for hosting the static web files.
2. Enable static website hosting and set the `index.html` as the entry point.
3. Upload the contents of the `static/` folder to the bucket.

#### 2. Deploy Lambda Function
1. Zip the contents of the `lambda/notify_overdue.js` file.
2. Create a new Lambda function in the AWS Management Console.
3. Upload the zipped file and set up appropriate IAM roles.

#### 3. Configure CI/CD Pipeline
1. Use the provided [CloudFormation template](cloudformation.yaml) to deploy the pipeline.
2. Ensure the pipeline integrates with your GitHub repository for the source.

---

## How It Works

1. **Add Laptops:** Users interact with the static web app to add laptops and manage their status.
2. **Track Overdue Laptops:** The Lambda function periodically checks the return dates of deployed laptops.
3. **Send Notifications:** Emails are sent for laptops with overdue return dates until they are returned.

---

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** AWS Lambda, AWS SES
- **Hosting:** Amazon S3
- **Pipeline:** AWS CodePipeline, AWS CodeBuild

---

## Future Enhancements

1. **Authentication:** Add user authentication for secure access.
2. **Database Integration:** Replace in-memory data with Amazon DynamoDB for persistence.
3. **Enhanced Notifications:** Add SMS notifications using Amazon SNS.
4. **Mobile Responsiveness:** Improve UI for better mobile experience.

---

## Contributions

Feel free to fork this repository and submit pull requests for new features or bug fixes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or feedback, please reach out to alexmosesk@icloud.com.
