# Directory App

The Directory app primarily functions by enabling users to enter their information, facilitating efficient access to specific data through the search functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)

## Installation

1. Clone the repository: `git clone https://github.com/brilliantcoderfirst/Directory_React_App.git`
2. Navigate to the project directory: `cd Directory_React_App`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your browser and visit: `http://localhost:3000`

## Features

#### Feature 1:
    Create an interface with two tabs ( `Add New Person, Retrieve Information` ).

#### Feature 2:  
    1) In the `Add New Person` section, implement a table with columns for `Name`, `Date of Birth`, `Aadhar Number`, `Mobile Number`, and an automatically calculated `Age` based on the Date of Birth.

    2) Ensure accurate data capture by including the aforementioned columns and enabling users to enter relevant information such as full name, birth date, Aadhar identification number, and contact number.

    3) Automate the `Age` calculation by incorporating logic that derives the individual's age from the provided `Date of Birth`.

#### Feature 3:    
    1)  Implement a `button` at the page's bottom to facilitate the dynamic creation of a `new row`, ensuring all input fields begin empty.

    2) This button empowers users to conveniently add new rows to the table, promoting efficient data entry by initializing each field with no pre-existing values.

#### Feature 4:     
    1)  Each row should contain two buttons in the last column:

        Button 1: `Save` - This button will store all the input information in a list of objects in the local storage.

        Button 2: `Delete` - If the row has not been saved, clicking this button will remove the row from the table. Otherwise, the appropriate action will be taken.

    2) The presence of these buttons ensures user functionality by providing the option to save input data using the `Save` button and allowing removal of unsaved rows through the `Delete` button, with appropriate actions based on the row's save status.

#### Feature 5: 
    Ensure `data` integrity by `validating` that all input fields contain data before storing it in `local storage`.

#### Feature 6:    

    1) Additionally, incorporate the following validation requirements:

        a. The "Aadhar Number" should consist of exactly 12 digits.
        b. The "Mobile Number" should consist of exactly 10 digits.

    2) Enhance data accuracy by implementing validation checks to ensure that the "Aadhar Number" contains precisely 12 digits and the "Mobile Number" consists of exactly 10 digits.

#### Feature 7: 

    1) Within the "Retrieve Information" section, provide a user-friendly form allowing input of the "Aadhar Number," enabling the web application to query the local storage for potential matches.

    2) Enhance user experience by incorporating a dedicated form in the "Retrieve Information" section, enabling users to input an "Aadhar Number" and enabling the web application to perform a query against the local storage to identify potential matches.

#### Feature 8: 
    
    1) In the event of a match, the web application should present all pertinent information associated with the entered "Aadhaar Number" within a table. If no match is found, a message stating "No match found" should be displayed.

    2) Upon finding a match, the web app should exhibit a table showcasing all relevant details linked to the provided "Aadhaar Number." Conversely, if no match is detected, a message indicating "No match found" should be exhibited.



## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request