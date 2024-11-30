## Deploy Portfolio Website on GCP with App Engine
This guide explains how to deploy a portfolio website built with Vite, ReactJS, and TailwindCSS on Google Cloud Platform (GCP) using App Engine.

### Steps to Deploy
#### 1. Create a New Project on GCP
  1. Log in to Google Cloud Console.
  2. Click New Project and give it a name.
  3. Enable the following APIs in your project go to Navigation Menu or either search it direct on search:
     * App Engine
     * Cloud Build API
  4. While enabling App Engine:
      * Choose a region.
      * Click Get Started.
      * Select Node.js as the runtime language.
#### 2. Activate Cloud Shell
  1. In the GCP console, click Activate Cloud Shell.
  2. Clone your GitHub repository:
   ```Bash
        git clone https://github.com/zaib-shekh/my-portfolio.git
   ```
  Replace <repository-url> with your repository link (e.g., 
  https://github.com/zaib-shekh/my-portfolio.git).
  3. List the cloned folders using:
   ```Bash
        ls
   ```

  4. Navigate to your project folder:
   ```Bash
         cd <folder_name> 
   ```
Replace <folder_name> with the name of your cloned folder cd my-portfolio.

#### 3. Install Dependencies and Build the Project
  1. Install all dependencies:
   ```Bash
         npm install
   ```

  2. Build your project to generate the dist folder:
   ```Bash
         npm run build
   ```

  3. Clean up the folder by deleting unnecessary files (keep only the dist folder):
   ```Bash
         rm -r <file_or_folder_name>
   ```

Example:
   ```Bash
         rm -r index.html
         rm -r node_modules
         rm -r src
   ```
#### 4. Create and Configure app.yaml
  1. Create the app.yaml file:
   ```Bash
         touch app.yaml
   ```

  2. Open the file in the editor:
   ```Bash
         vim app.yaml
   ```
  3. Press i to enter insert mode and paste the following content:
   ```yaml
      runtime: nodejs22
      handlers:
      - url: /(.*\..+)$
        static_files: dist/\1
        upload: dist/(.*\..+)$
      - url: /.*
        static_files: dist/index.html
        upload: dist/index.html
   ```

  4. Save and exit:
    1. Press Esc.
    2. Type :wq and hit Enter.
     
#### 5. Deploy to App Engine
  1. Deploy the app using the following command:
   ```Bash
         gcloud app deploy
   ```
   
  2. When prompted, click Authorize and confirm by typing y and hitting Enter.
#### 6. Access Your Deployed Website
  1. Open the website using:
   ```Bash
         gcloud app browse
   ```
This command will provide a URL. Click the URL to visit your deployed site.
You can visit my portfolio at  https://vital-plating-443217-k7.el.r.appspot.com/
### NOTE: Make Sure you have created and upload reactjs file in your Github


