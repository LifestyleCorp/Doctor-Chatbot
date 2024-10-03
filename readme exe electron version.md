```markdown
# Doctor-Chatbot

![License](https://img.shields.io/github/license/yourusername/Doctor-Chatbot)
![GitHub stars](https://img.shields.io/github/stars/yourusername/Doctor-Chatbot?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/Doctor-Chatbot?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/Doctor-Chatbot)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
  - [Core Features](#core-features)
  - [Advanced Features](#advanced-features)
  - [Offline Capabilities](#offline-capabilities)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Contributing](#contributing)
- [Testing](#testing)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [FAQ](#faq)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Overview

**Doctor-Chatbot** is a sophisticated multimodal Large Language Model (LLM) powered open-source desktop application designed to assist both healthcare professionals and individuals in diagnosing medical conditions, recommending physical examinations, advising necessary investigations, and providing management plans for a wide range of medical ailments. By leveraging prepackaged data sources and advanced features, Doctor-Chatbot ensures comprehensive and reliable medical guidance entirely offline.

With the integration of advanced features such as a multi-agent framework, interactive 3D human body visualization, and intelligent report analysis, Doctor-Chatbot stands as a cutting-edge tool in the realm of digital health assistants. The application is designed to run locally on consumer laptops or computers, ensuring ease of access, enhanced privacy, and uninterrupted functionality without the need for internet connectivity.

![Doctor-Chatbot Banner](assets/banner.png)

## Features

### Core Features

- **Multimodal Interaction:** Supports both text and video inputs/outputs to enhance user experience and provide comprehensive guidance.
- **Accurate Diagnostics:** Utilizes advanced LLM capabilities to analyze symptoms and provide potential diagnoses with high accuracy.
- **Physical Examination Recommendations:** Suggests specific physical examinations and provides video demonstrations from trusted sources.
- **Investigation Advice:** Recommends appropriate diagnostic tests and procedures tailored to the user's condition.
- **Management Plans:** Offers evidence-based treatment and management strategies aligned with current medical guidelines.
- **Data Integration:** Aggregates information from private repositories to provide rich resources.
- **User-Friendly Interface:** Intuitive and accessible interface for seamless interaction.
- **Open Source:** Fully open-source, promoting transparency, collaboration, and continuous improvement by the community.
- **Privacy and Security:** Ensures user data is handled with the highest standards of privacy and security.

### Advanced Features

- **Multi-Agent Framework:**
  - **Default Multi-Agent Setup:** Doctor-Chatbot operates on a multi-agent framework where each agent represents a specialist (e.g., Cardiologist, Neurologist, PhD in specific medical fields).
  - **Group Chat Onboarding:** When a patient initiates a session, they are onboarded into a group chat comprising these agent doctors who engage in collaborative conversations to provide comprehensive medical advice.

- **Interactive 3D Human Body Display:**
  - **Half-Screen 3D Visualization:** The user interface includes a half-screen display featuring a 3D human body model.
  - **Problem Pointing and Selection:** Patients can interact with the 3D model by pointing and selecting specific body parts to indicate where they are experiencing issues, enhancing the accuracy of symptom reporting.

- **Comprehensive Report Management:**
  - **Half-Screen Report Display:** Another half-screen section allows patients to upload and manage their past medical reports.
  - **Interactive Dropdowns and Checkboxes:** Users can add past reports and select relevant markers from dropdown lists and checkboxes, facilitating easy input of alphanumerical data corresponding to lab investigations.

- **Dynamic Clinical Sign Recommendations:**
  - **Prepackaged Video Resources:** During conversations, agents can recommend performing or eliciting clinical signs by showing relevant prepackaged videos of clinical examinations.
  - **Automated Retrieval:** The system retrieves video URLs from the locally stored source files, ensuring patients have access to visual guidance without relying on external APIs.

- **Advanced Report Analysis with Talking Avatar:**
  - **Report Uploading:** Patients can upload past imaging reports such as CT scans, X-rays, or other diagnostic images.
  - **Automated Explanation:** A talking avatar analyzes the uploaded reports and provides explanations in layman's terms, along with segmented and rendered views of the report images to enhance understanding.

### Offline Capabilities

- **Standalone Execution:** The application runs entirely offline on consumer laptops or computers without the need for internet connectivity.
- **Local Data Storage:** All user data, interactions, and uploaded reports are stored locally with an auto-save feature to ensure data persistence.
- **Prepackaged Resources:** Includes a comprehensive library of clinical examination videos stored within the application, eliminating the need for external API calls.

## Architecture

Doctor-Chatbot is built using a modular architecture to ensure scalability, maintainability, and ease of contribution. The primary components include:

1. **Frontend:**
   - **Framework:** Electron with React.js
   - **Description:** Provides an interactive and responsive user interface for users to interact with the chatbot, including the 3D human body display and report management sections. Electron allows the application to run as a desktop application, stored locally on the user's laptop or computer.

2. **Backend:**
   - **Framework:** Flask
   - **Description:** Handles API requests, processes user inputs, manages interactions with the LLM and other services, and coordinates the multi-agent framework.

3. **Language Model:**
   - **Model:** Quantized Open-Source LLM with Vision Capabilities (e.g., [LLaMA](https://github.com/facebookresearch/llama))
   - **Description:** Powers the chatbot's natural language understanding and generation capabilities, facilitating intelligent and context-aware conversations. The model is optimized to run locally with reduced parameters to ensure compatibility with consumer-grade hardware.

4. **Data Integration Layer:**
   - **Local Data Sources:** Prepackaged video files of clinical examinations.
   - **Description:** Fetches relevant video resources from the locally stored source files to provide comprehensive responses and interactive features without relying on external APIs.

5. **Database:**
   - **Type:** SQLite (for local storage)
   - **Description:** Stores user data, interaction logs, uploaded reports, and other necessary information securely on the user's local machine.

6. **Authentication & Authorization:**
   - **Tools:** OAuth 2.0, JWT
   - **Description:** Manages secure user authentication and authorization, ensuring data privacy and security.

7. **Multi-Agent Coordination:**
   - **Framework:** Custom Multi-Agent System
   - **Description:** Facilitates communication and collaboration among specialized agent doctors within group chats.

8. **3D Visualization Engine:**
   - **Tools:** Three.js
   - **Description:** Renders interactive 3D human body models for symptom selection and visualization.

9. **Report Analysis Module:**
   - **Tools:** Computer Vision Libraries (e.g., OpenCV), NLP Models
   - **Description:** Analyzes uploaded medical reports and images, generating layman-friendly explanations and visual renderings.

10. **Deployment:**
    - **Platform:** Electron packaging for desktop (e.g., Electron Packager, Electron Builder)
    - **Description:** Ensures the application is packaged as a standalone desktop application that can be easily installed and run locally.

![Architecture Diagram](assets/architecture.png)

## Technologies Used

- **Frontend:**
  - Electron
  - React.js
  - Redux
  - Tailwind CSS
  - Three.js (for 3D visualization)

- **Backend:**
  - Python
  - Flask
  - RESTful APIs

- **Language Model:**
  - Quantized Open-Source LLM with Vision Capabilities (e.g., LLaMA)
  - Hugging Face Transformers

- **Database:**
  - SQLite (for local storage)
  - SQLAlchemy

- **Data Integration:**
  - Prepackaged Video Files
  - Custom Data Integrations

- **Deployment:**
  - Electron Packager/Electron Builder
  - Docker (optional for development)

- **Authentication:**
  - OAuth 2.0
  - JSON Web Tokens (JWT)

- **Other Tools:**
  - Git & GitHub
  - CI/CD Pipelines (GitHub Actions, Jenkins)
  - Testing Frameworks (PyTest, Jest)

## Installation

Follow these steps to set up Doctor-Chatbot locally on your laptop or computer.

### Prerequisites

- **Operating System:** Windows, macOS, or Linux
- **Python:** 3.8 or higher
- **Node.js:** 14.x or higher
- **Git:** Installed and configured
- **Electron:** Included via package.json dependencies
- **Docker:** (Optional, for containerized development)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/Doctor-Chatbot.git
   cd Doctor-Chatbot
   ```

2. **Setup Backend**

   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Setup Frontend**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure Environment Variables**

   Create a `.env` file in both `backend` and `frontend` directories with the necessary configurations.

   **Backend `.env` Example:**

   ```env
   OPENAI_API_KEY=your_openai_api_key
   SECRET_KEY=your_secret_key
   ```

   **Frontend `.env` Example:**

   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

5. **Initialize the Database**

   Since the application is intended to run locally, SQLite is used for simplicity.

   ```bash
   cd ../backend
   flask db init
   flask db migrate
   flask db upgrade
   ```

6. **Run the Application**

   **Backend:**

   ```bash
   cd backend
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   flask run
   ```

   **Frontend & Electron:**

   Open a new terminal window/tab.

   ```bash
   cd frontend
   npm start
   ```

   This will launch the Electron-based desktop application, which communicates with the backend Flask server running locally.

7. **Packaging the Application**

   To create a standalone `.exe` (Windows) or equivalent for other operating systems:

   ```bash
   cd frontend
   npm run build
   npm run electron-packager
   ```

   The packaged application will be available in the `dist` directory, ready for distribution.

## Configuration

### Environment Variables

Ensure all necessary environment variables are set in the `.env` files for both backend and frontend.

- **Backend:**
  - `OPENAI_API_KEY`: Your OpenAI API key for accessing the LLM.
  - `SECRET_KEY`: A secret key for securing sessions and tokens.

- **Frontend:**
  - `REACT_APP_API_URL`: The base URL for backend API endpoints.

### API Keys

- **OpenAI API Key:**
  - Sign up at [OpenAI](https://openai.com/) to obtain your API key.

### Database Configuration

The application uses SQLite for local storage, which requires no additional setup. Ensure that the `DATABASE_URL` in the backend is set to use SQLite.

**Example SQLite Configuration in `backend/.env`:**

```env
DATABASE_URL=sqlite:///doctor_chatbot.db
```

Run migrations to set up the necessary tables.

```bash
flask db init
flask db migrate
flask db upgrade
```

## Usage

Once installed and running, you can interact with Doctor-Chatbot through the desktop application.

### Accessing the Chatbot

1. **Launch the Application:**
   - Open the Electron-based Doctor-Chatbot application from your desktop.

2. **Start a Conversation:**
   - **Multi-Agent Group Chat:**
     - Upon initiating a session, you are added to a group chat consisting of various agent doctors, each specializing in different medical fields.
     - These agents collaborate to provide comprehensive medical advice based on your inputs.
   
   - **Interactive 3D Human Body:**
     - Use the half-screen 3D human body display to indicate specific areas where you are experiencing issues by pointing and selecting the corresponding body parts.
   
   - **Report Management:**
     - Upload your past medical reports (e.g., CT scans, X-rays) in the designated section.
     - Use dropdowns and checkboxes to input relevant lab investigations and markers.
   
   - **Dynamic Recommendations:**
     - During the conversation, agents may recommend performing specific clinical signs.
     - Relevant instructional videos will be fetched from the prepackaged video library to guide you through the examinations.
   
   - **Advanced Report Analysis:**
     - Upload imaging reports, and a talking avatar will provide a layman-friendly explanation of the findings, along with segmented and rendered visuals of the report images.

### Example Interaction

```plaintext
**User:** I've been experiencing severe headaches and nausea for the past two days.

**Doctor-Chatbot (Group Chat):**
**Dr. Smith (Neurologist):** Based on your symptoms, possible diagnoses include migraine, tension headache, or sinusitis.
**Dr. Lee (Radiologist):** It might be beneficial to review any recent imaging studies you have.
**PhD Johnson (Clinical Researcher):** I recommend the following physical examinations:
- Neurological exam: [Watch Video](assets/videos/neurological_exam.mp4)
- Sinus examination: [Watch Video](assets/videos/sinus_exam.mp4)

**Doctor-Chatbot:**
Additionally, consider the following investigations:
- MRI of the brain
- Sinus X-ray

For management, you may consider:
- Over-the-counter analgesics
- Hydration and rest
- Consult a neurologist if symptoms persist
```

## API Reference

Doctor-Chatbot exposes a set of RESTful APIs for integration with other applications.

### Base URL

```
http://localhost:5000/api
```

### Endpoints

#### 1. **POST /diagnose**

Analyze symptoms and provide potential diagnoses.

- **Request:**

  ```json
  {
    "symptoms": "string"
  }
  ```

- **Response:**

  ```json
  {
    "diagnoses": [
      "Diagnosis 1",
      "Diagnosis 2",
      "Diagnosis 3"
    ],
    "confidence_scores": [0.9, 0.75, 0.6]
  }
  ```

#### 2. **GET /examinations**

Retrieve recommended physical examinations based on diagnosis.

- **Parameters:**
  - `diagnosis` (string)

- **Response:**

  ```json
  {
    "examinations": [
      {
        "name": "Neurological Exam",
        "video_url": "assets/videos/neurological_exam.mp4"
      },
      {
        "name": "Sinus Examination",
        "video_url": "assets/videos/sinus_exam.mp4"
      }
    ]
  }
  ```

#### 3. **GET /investigations**

Suggest necessary diagnostic tests based on diagnosis.

- **Parameters:**
  - `diagnosis` (string)

- **Response:**

  ```json
  {
    "investigations": [
      "MRI of the brain",
      "Sinus X-ray"
    ]
  }
  ```

#### 4. **GET /management**

Provide management and treatment recommendations based on diagnosis.

- **Parameters:**
  - `diagnosis` (string)

- **Response:**

  ```json
  {
    "management": {
      "Migraine": [
        "Over-the-counter analgesics (e.g., ibuprofen)",
        "Hydration and rest",
        "Avoiding known triggers",
        "Consult a neurologist if symptoms persist"
      ],
      "Tension Headache": [
        "Stress management techniques",
        "Muscle relaxants if necessary",
        "Regular exercise"
      ],
      "Sinusitis": [
        "Decongestants",
        "Nasal corticosteroids",
        "Antibiotics if bacterial infection is suspected"
      ]
    }
  }
  ```

#### 5. **POST /upload-report**

Upload medical reports and receive an analysis.

- **Request:**

  - **Headers:**
    - `Content-Type: multipart/form-data`
  
  - **Body:**
    - `file`: Binary file (e.g., CT scan, X-ray)

- **Response:**

  ```json
  {
    "message": "Report uploaded successfully.",
    "analysis": {
      "summary": "Layman-friendly explanation of the report findings.",
      "segments": [
        {
          "section": "Findings",
          "description": "Detailed explanation.",
          "image_url": "assets/images/segment1.png"
        },
        {
          "section": "Conclusion",
          "description": "Final thoughts.",
          "image_url": "assets/images/segment2.png"
        }
      ],
      "avatar_video_url": "assets/videos/avatar_explanation.mp4"
    }
  }
  ```

### Error Handling

All endpoints return appropriate HTTP status codes and error messages.

- **400 Bad Request:** Missing or invalid parameters.
- **401 Unauthorized:** Invalid or missing authentication tokens.
- **500 Internal Server Error:** Unexpected server errors.

## Examples

### Using the API with cURL

1. **Diagnose Symptoms**

   ```bash
   curl -X POST http://localhost:5000/api/diagnose \
   -H "Content-Type: application/json" \
   -d '{"symptoms": "severe headaches and nausea"}'
   ```

2. **Get Physical Examinations**

   ```bash
   curl http://localhost:5000/api/examinations?diagnosis=Migraine
   ```

3. **Get Investigations**

   ```bash
   curl http://localhost:5000/api/investigations?diagnosis=Sinusitis
   ```

4. **Get Management Plan**

   ```bash
   curl http://localhost:5000/api/management?diagnosis=Tension%20Headache
   ```

5. **Upload Medical Report**

   ```bash
   curl -X POST http://localhost:5000/api/upload-report \
   -H "Content-Type: multipart/form-data" \
   -F "file=@/path/to/report.jpg"
   ```

### Integrating with Frontend

Below is an example of how to fetch diagnoses from the backend in React.js.

```javascript
import React, { useState } from 'react';
import axios from 'axios';

const DiagnoseForm = () => {
  const [symptoms, setSymptoms] = useState('');
  const [diagnoses, setDiagnoses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/diagnose`, { symptoms });
      setDiagnoses(response.data.diagnoses);
    } catch (error) {
      console.error('Error fetching diagnoses:', error);
    }
  };

  return (
    <div>
      <h2>Enter Your Symptoms</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Describe your symptoms..."
          required
        />
        <br />
        <button type="submit">Diagnose</button>
      </form>

      {diagnoses.length > 0 && (
        <div>
          <h3>Possible Diagnoses:</h3>
          <ul>
            {diagnoses.map((diag, index) => (
              <li key={index}>{diag}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DiagnoseForm;
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### Guidelines

1. **Fork the Repository**

   Click the "Fork" button at the top right of this repository to create a copy on your GitHub account.

2. **Clone the Forked Repository**

   ```bash
   git clone https://github.com/yourusername/Doctor-Chatbot.git
   cd Doctor-Chatbot
   ```

3. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

4. **Commit Your Changes**

   ```bash
   git commit -m "Add your feature"
   ```

5. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

6. **Open a Pull Request**

   Navigate to the original repository and click "Compare & pull request". Provide a clear description of your changes.

### Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming and respectful environment for all contributors.

### Issues

If you encounter any bugs or have feature requests, please open an [issue](https://github.com/yourusername/Doctor-Chatbot/issues).

## Testing

Ensuring the reliability and stability of Doctor-Chatbot is paramount. Follow these steps to run tests locally.

### Backend Testing

1. **Navigate to Backend Directory**

   ```bash
   cd backend
   ```

2. **Activate Virtual Environment**

   ```bash
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Run Tests**

   ```bash
   pytest
   ```

### Frontend Testing

1. **Navigate to Frontend Directory**

   ```bash
   cd frontend
   ```

2. **Run Tests**

   ```bash
   npm test
   ```

### Continuous Integration

We use GitHub Actions to run tests automatically on every push and pull request. Check the `.github/workflows` directory for configuration details.

## Deployment

Deploying Doctor-Chatbot can be done by packaging it as a desktop application using Electron. This ensures that the application is simple, runs locally on the user's laptop or computer, and does not require complex server setups.

### Packaging with Electron

1. **Build Frontend**

   ```bash
   cd frontend
   npm run build
   ```

2. **Package with Electron**

   ```bash
   npm run electron-packager
   ```

   The packaged application will be available in the `dist` directory, ready for distribution.

### Optional: Using Docker for Development

While the application is intended to run locally, Docker can be used to create consistent development environments.

1. **Build Docker Images**

   **Backend:**

   ```bash
   cd backend
   docker build -t yourusername/doctor-chatbot-backend:latest .
   ```

   **Frontend:**

   ```bash
   cd ../frontend
   docker build -t yourusername/doctor-chatbot-frontend:latest .
   ```

2. **Run Docker Containers**

   ```bash
   docker-compose up -d
   ```

   Ensure `docker-compose.yml` is properly configured with services for frontend, backend, and database.

### Environment Variables in Production

Use environment variable management tools or Electron's built-in mechanisms to securely handle sensitive information within the packaged application.

## Roadmap

See the [ROADMAP](ROADMAP.md) for upcoming features and planned improvements.

### Future Enhancements

- **Natural Language Understanding Improvements:** Enhance the LLM's ability to understand complex medical jargon and nuanced symptoms.
- **Expanded Data Sources:** Integrate more medical databases and video platforms for comprehensive resources.
- **User Authentication:** Implement user accounts with personalized history and recommendations.
- **Mobile Application:** Develop mobile apps for Android and iOS for broader accessibility.
- **Multilingual Support:** Support multiple languages to cater to a global audience.
- **Integration with EHR Systems:** Allow seamless integration with Electronic Health Records for healthcare providers.
- **Enhanced Report Analysis:** Improve the accuracy and depth of report analysis with advanced AI models.
- **Avatar Customization:** Allow users to customize the talking avatar for a more personalized experience.
- **Offline Functionality Enhancements:** Further enhance the application's offline capabilities by optimizing data storage and access.

## FAQ

### Is Doctor-Chatbot a substitute for professional medical advice?

**No.** Doctor-Chatbot is an AI-powered tool intended for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.

### How is user data handled?

User data is handled with the utmost care, adhering to privacy and security best practices. Personal information is stored securely in the local SQLite database and is not shared with third parties without explicit consent.

### Can I contribute to Doctor-Chatbot?

**Absolutely!** We welcome contributions from developers, medical professionals, and users. Please refer to the [Contributing](#contributing) section for guidelines.

### What licenses are used for the project?

Doctor-Chatbot is open-source and licensed under the [MIT License](LICENSE).

### How accurate are the diagnoses provided by Doctor-Chatbot?

While Doctor-Chatbot leverages advanced LLMs to provide potential diagnoses based on input symptoms, it is not infallible. Users should consult healthcare professionals for accurate diagnosis and treatment.

### How does the multi-agent framework work?

Doctor-Chatbot utilizes a multi-agent framework where each agent represents a specialist in a particular medical field. These agents collaborate within a group chat to provide comprehensive and accurate medical advice tailored to the user's symptoms and reports.

### Can I interact with the 3D human body model?

**Yes.** The interface includes an interactive 3D human body model that allows you to point and select specific areas to indicate where you are experiencing issues. This helps in providing more accurate diagnostic suggestions.

### How does the report analysis with the talking avatar work?

When you upload past medical reports or imaging studies, the system processes these documents using computer vision and natural language processing techniques. A talking avatar then provides a layman-friendly explanation of the findings, accompanied by segmented and rendered images of the report for better understanding.

### Is the application available offline?

**Yes.** Doctor-Chatbot is designed to run entirely offline on your local machine. All data, including user interactions and uploaded reports, are stored locally with an auto-save feature. The application utilizes prepackaged videos for clinical examinations, eliminating the need for external API calls.

## License

This project is licensed under the [MIT License](LICENSE). 

![License Badge](https://img.shields.io/github/license/yourusername/Doctor-Chatbot)

## Acknowledgments

- **OpenAI:** For providing the powerful language models that drive Doctor-Chatbot.
- **YouTube & Vimeo:** For offering vast repositories of educational medical videos.
- **Three.js:** For enabling interactive 3D visualizations.
- **Electron:** For facilitating the development of a simple and local desktop application.
- **Contributors:** Special thanks to all the contributors who have helped improve Doctor-Chatbot.
- **Medical Professionals:** For their invaluable insights and guidance in developing accurate medical responses.
- **Community:** To the open-source community for fostering collaboration and innovation.

## Contact

For any inquiries, support, or suggestions, please reach out through the following channels:

- **Email:** [your.email@example.com](mailto:your.email@example.com)
- **GitHub Issues:** [Open an Issue](https://github.com/yourusername/Doctor-Chatbot/issues)
- **Twitter:** [@yourtwitterhandle](https://twitter.com/yourtwitterhandle)
- **LinkedIn:** [Your LinkedIn Profile](https://www.linkedin.com/in/yourprofile)

---

*Disclaimer: Doctor-Chatbot is an AI-powered tool intended for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.*
```
