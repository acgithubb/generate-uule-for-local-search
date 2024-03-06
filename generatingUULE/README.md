Lambda Function for Generating Google Search URLs with UULE Parameter

This Lambda function takes input parameters from an API Gateway event to construct a Google search URL incorporating the UULE parameter, which allows for location-based search customization.

Purpose

The purpose of this Lambda function is to dynamically generate Google search URLs based on specific query parameters including the search query (q), country (gl), language (hl), Google's redirected domain (gws_rd), personalization (pws), and location (location) using the UULE parameter for location-based searches.

Dependencies

create-uule: A module to generate the UULE parameter for Google searches based on a given location.
Setup

Before deploying this Lambda function, ensure you have the following:

AWS CLI installed and configured on your machine.
Node.js and npm installed.
An AWS account with permissions to create Lambda functions and API Gateways.
Installing Dependencies
Navigate to your project directory and run the following command to install the required dependency:

bash
Copy code
npm install create-uule
Deployment

Follow these steps to deploy the Lambda function:

Package Your Function: Zip the contents of your project directory, including the node_modules folder.
Create a Lambda Function:
Open the AWS Management Console.
Go to the Lambda service page.
Click "Create function".
Choose "Author from scratch".
Fill in the function name and select the runtime as Node.js.
Choose or create an execution role that has permissions to execute Lambda functions.
Click "Create function".
Upload Your Code:
In the function's "Code" tab, choose "Upload from" and select ".zip file".
Upload the zip file containing your project.
Set Handler Information: Ensure the handler is set to the filename where your exported lambdaHandler function resides, followed by .lambdaHandler. For example, if your file is named index.js, the handler should be index.lambdaHandler.
Configure API Gateway:
Go to the API Gateway service page.
Create a new API or use an existing one.
Set up a new resource and method to trigger your Lambda function.
Deploy the API.
Testing

To test your Lambda function:

Invoke the Function via API Gateway:
Navigate to your API in the API Gateway console.
Find the URL for invoking your API.
Use a tool like Postman or a browser to send a request to your API with the appropriate JSON body, e.g., {"location": "New York", "q": "digital marketing agency", "gl": "us", "hl": "en", "gws_rd": "cr", "pws": "0"}.
Verify the Response: Ensure the response contains the correctly formatted Google search URL with the UULE parameter.
Notes

Customize the function and deployment process as needed to fit your project's requirements.
Ensure your IAM roles and policies are correctly configured to allow your Lambda function to execute and access other AWS resources if necessary.
