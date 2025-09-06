pipeline {
    agent any

    stages {
        stage('Checkout') {
             steps {
                 git branch: 'main', url: 'https://github.com/mitali246/react-ci-demo.git'
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
                sh 'nohup npm start -- --port=3001 &'
                sh 'sleep 10' // wait for server to start
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
            echo "Pipeline completed, React app stopped."
        }
    }
}
