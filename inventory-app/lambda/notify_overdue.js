const AWS = require("aws-sdk");
const SES = new AWS.SES();

exports.handler = async (event) => {
  const laptops = [
    { assetNo: "67890", status: "Deployed", returnDate: "2025-01-10" }, // Example overdue data
  ];

  const today = new Date().toISOString().split("T")[0];
  const overdueItems = laptops.filter(
    (laptop) => laptop.status === "Deployed" && laptop.returnDate < today
  );

  if (overdueItems.length === 0) {
    console.log("No overdue items to notify.");
    return;
  }

  const emailParams = {
    Source: "noreply@example.com",
    Destination: {
      ToAddresses: ["admin@example.com"],
    },
    Message: {
      Subject: {
        Data: "Overdue Inventory Reminder",
      },
      Body: {
        Text: {
          Data: `The following items are overdue:\n${JSON.stringify(
            overdueItems,
            null,
            2
          )}`,
        },
      },
    },
  };

  try {
    await SES.sendEmail(emailParams).promise();
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Error sending email:", err);
  }
};
