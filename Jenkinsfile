pipeline {
    agent any

    environment {
        IMAGE = "ghcr.io/vikasrajput0112/mobile-web:${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh '''
                  npm install
                  npm run build
                '''
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                  docker build -t $IMAGE .
                '''
            }
        }

        stage('Trivy Image Scan') {
            steps {
                sh '''
                  echo "Starting Trivy scan on image: $IMAGE"
                  trivy image \
                    --severity HIGH,CRITICAL \
                    --exit-code 0 \
                    $IMAGE
                '''
            }
        }

        stage('Push Image') {
            steps {
                withCredentials([string(credentialsId: 'github-jenkins', variable: 'TOKEN')]) {
                    sh '''
                      echo $TOKEN | docker login ghcr.io -u USER --password-stdin
                      docker push $IMAGE
                    '''
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline completed for image: $IMAGE"
        }
        success {
            echo "Build, scan, and push successful!"
        }
        failure {
            echo "Pipeline failed. Check logs for details."
        }
    }
}
