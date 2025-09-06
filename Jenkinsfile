pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/mitali246/react-ci-demo.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Start React App') {
            steps {
                sh 'nohup npm start &'
                sleep 15
            }
        }

        stage('Run UI Tests') {
            steps {
                sh 'npm run test:ui'
            }
        }
    }

    post {
        always {
            sh "pkill -f 'react-scripts start' || true"
            echo 'Pipeline completed, React app stopped.'
        }
    }
}
