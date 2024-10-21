pipeline {
    agent any
    //tools {nodejs "NODEJS"}
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                bat 'npm start'
                // bat 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\reactapp\\jenkins\\scripts\\deliver.sh'
                // input message: 'Finished using the web site? (Click "Proceed" to continue)'
                // bat 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\reactapp\\jenkins\\scripts\\kill.sh'
            }
        }
    }
}