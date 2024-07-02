

# YouTube 2.0 Clone

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)


## Overview
YouTube 2.0 is a clone of the popular video-sharing platform, built using React.js and Material UI. It leverages the RapidAPI YouTube v3 to fetch and display video data, providing a seamless and modern user experience.

## Features
- **Search for YouTube videos**: Users can search for videos using the search bar.
- **Feed page with sidebar categories**: Instant results are displayed when a category is clicked.
- **React YouTube video player**: Play videos directly within the application.
- **Channel details**: View details of a channel along with its videos.
- **Responsive design**: Adaptable to various screen sizes.

## Technologies Used
- **React.js**: JavaScript library for building user interfaces.
- **Material UI**: React component library for fast and easy UI development.
- **RapidAPI YouTube v3**: API for fetching YouTube video data.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/youtube-2.0-clone.git
   ```
2. Navigate to the project directory:
   ```sh
   cd youtube-2.0
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Start the development server:
   ```sh
   yarn run dev
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## API
This project uses the RapidAPI YouTube v3 to fetch video data. To use this API, you need to obtain an API key from RapidAPI and set it in your environment variables.

1. Sign up on [RapidAPI](https://rapidapi.com/).
2. Subscribe to the YouTube v3 API.
3. Create a `.env` file in the root directory of the project and add your API key:
   ```sh
   REACT_APP_RAPIDAPI_KEY=your_api_key
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request with your changes.

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```sh
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/your-feature
   ```
5. Open a pull request.

