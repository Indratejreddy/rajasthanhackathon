# Rajasthan Hackathon
In the age of digitalization and the internet, technology is advancing at an unprecedented rate. As a result, students are facing new challenges that require innovative solutions to address them. The team behind our project has identified several problems that students are grappling with, and we are determined to tackle them head-on.

One of the issues we came across was highlighted by Hitesh Chowdary, a software developer, in one of his Instagram reels. Hitesh spoke about how YouTube's recommendation algorithm can be a major distraction for developers, leading to a loss of motivation. Another idea he proposed was to create a feature that allows videos to be automatically dubbed into multiple languages, making them accessible to viewers worldwide. These are the types of problems that our project aims to solve.

We also received feedback from Indratej, a member of our team who has spent months researching laptops. Indratej suggested creating an application that recommends the ideal laptop based on a small quiz. This could save students a great deal of time and effort in choosing the right device for their needs.

Another problem that we identified was the issue of cheating in online exams. Akash, a member of our team, recently took a government exam called Koushal and noticed that many students cheated to win scholarships worth Rs. 12,000 per year. To tackle this problem, we are developing an AI-proctored exam that tracks candidates and ensures that they are not cheating. Additionally, we are incorporating features that make it possible for blind, deaf, and mute students to take the exam.

Overall, our project is aimed at addressing the problems faced by students in the digital age. We are excited to develop innovative solutions that make learning and education more accessible, efficient, and enjoyable for everyone. By working together, we can create a brighter future for students everywhere.
***NOTE that extension needs multiple reloads and time to function properly***


## 👉 LIVE DEMO:  https://vidyut.netlify.app/

## 🎁 Presentation ----> https://www.canva.com/design/DAFcDAyzF7w/13V_h7Dh7j_qOaOvvRy-oA/watch?utm_content=DAFcDAyzF7w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## 📷 Video ----> https://www.youtube.com/watch?v=IW7n_jTxMuI

## Mobile View Of Landing Page (FORGOT TO SHOW IN VIDEO)


https://user-images.githubusercontent.com/108281031/226314732-acaca050-f143-4684-9592-ba256116052f.mp4


## 🛠 Technologies Used
  - HTML - Hyper Text Markup Language
  - CSS - Cascadeing Spread Sheet
  - JS - Java Script
  - Face-api.js - Java Script Library runs on tensorflow
  - Email.js - To send mails in frontend
  - Twak.js - For Chatbot
  - Swiper.js - For Creative Slide Show
  - Youtube Data V3 API
  - AppForLanguage API
  - JSON - Java Script Object NOtation
  - Figma --> For Wireframes
  - Excali draw --> For Mind Mapping and brainstroming
  - WonderShare Filimora --> For Video Editing
 
## 📂 File Structure
This is made in vanialla JS so the file structure is not too complex basically have 4 files which are
- Focus-Mate-Main Extension
    - Assets             
        - Developers
        - Modes
    - Images
    - Backgroud.js   --->  Opens Our homepage when ever extension is mounted & enables extension when website is youtube only
    - Content.js     --->  Code To Trigger Hide Class for non related content
    - Custom.css     --->  Classes For Hiding Elements
    - Index.js       --->  Contains logic for getVideoSummary
    - Logic.js       ---> Core Logic for categorizing Videos
    - Manifest.JSON  ---> Like Package.json
    - Options.html   ---> Contains Buttons
    - Options.js     ---> Contains Logic For Buttons
    - Popup.CSS      ---> Styles for extension
    - Popup.HTML     ---> HTML for popup
    - Popup.JS       ---> Logic For checkboxex

- Landing Page
    - Images
    index.html
    style.css
    index.js

- Quizzo
    - assets
        - audio
        - images
    - labelled images  ---> Need To Train AI to recognize (pending)
    - models           ---> Contains face_landmark_68, ssd_mobilenetv1_model, tiny_face_detector_model
    - app.js           ---> Contains Core Logic
    - face-api.min.js  ---> Library Code
    - index.html       ---> Website HTML
    -style.css         ---> Website CSS

------------------------------------------------------------------------------------------------------------------------------------------------------------------
NEED TO WRITE FOLDER STRUCTURE DUE TO LACK OF TIME POSTPONED
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Run Locally

Clone the project

```bash
  git clone https://github.com/Srinivasan-Akash/Drum-Kit.git
```

Go to the project directory

```bash
  cd rajasthanhackathon
```
## ✍️ Author and 📞 Contact
- [Akash Srinivasan](https://www.github.com/octokatherine)
    - [Coder Community](https://web.codercommunity.io/user/62d568cb998d86c8883a2766?tab=posts)
    - [![facebook](https://img.shields.io/badge/Facebook-0A66C2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/profile.php?id=100083429257499)
    - [![instagram](https://img.shields.io/badge/Instagram-0A66C2?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/akash_prashanthi/)
    - [![youtube](https://img.shields.io/badge/YouTube-ff0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCAv1QdzDgV6MjA60CRtfkIg)

## Our Team 
1) Akash Srinivasan ----> Developed Home Page, Quizzo, Contributed To Focus Extension and Youtube Translator & Dictionary Extension (Designed in Figma), Developed  ReadMe.md, developer choose your laptop, integrated chatbot (twak)
2) Indratej Reddy   ----> Developed Focus Mate and Youtube Translator & Dictionary Extension, Developed PPT, Gave suggestions in design and helped in brainstroming
3) AJ Jagadish      ----> Integrated Email.js
4) Shashank Singh   ----> Created Mobile Navbar
5) Rakshit Koyani   ----> Developed Google Forms
