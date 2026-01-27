pipeline {
  agent any

  environment {
    IMAGE_REPO = "ghcr.io/vikasrajput0112/mobile-web"
    IMAGE = "${IMAGE_REPO}:${BUILD_NUMBER}"
    COSIGN_EXPERIMENTAL = "1"
    KEEP_IMAGES = "5"
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build App') {
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

    stage('Trivy Image Scan (HTML Report)') {
      steps {
        sh '''
          trivy image $IMAGE \
            --severity HIGH,CRITICAL \
            --format template \
            --template @/usr/local/share/trivy/templates/html.tpl \
            -o trivy-report.html \
            --exit-code 0
        '''
      }
    }

    stage('Push Image') {
      steps {
        withCredentials([
          string(credentialsId: 'github-jenkins', variable: 'TOKEN')
        ]) {
          sh '''
            echo $TOKEN | docker login ghcr.io -u USER --password-stdin
            docker push $IMAGE
          '''
        }
      }
    }

    stage('Get Image Digest') {
      steps {
        script {
          def IMAGE_DIGEST = sh(
            script: "docker inspect $IMAGE --format='{{index .RepoDigests 0}}'",
            returnStdout: true
          ).trim()

          env.IMAGE_DIGEST = IMAGE_DIGEST
          echo "🔐 Image Digest: ${IMAGE_DIGEST}"
        }
      }
    }

    stage('Cosign Sign Image') {
      steps {
        withCredentials([
          file(credentialsId: 'cosign-key', variable: 'COSIGN_KEY'),
          string(credentialsId: 'cosign-password', variable: 'COSIGN_PASSWORD')
        ]) {
          sh '''
            export COSIGN_PASSWORD=$COSIGN_PASSWORD
            cosign sign --key $COSIGN_KEY $IMAGE_DIGEST
          '''
        }
      }
    }

    stage('Cleanup Old Local Images (Keep Latest 5)') {
      steps {
        sh '''
          echo "🧹 Keeping only latest $KEEP_IMAGES images for $IMAGE_REPO"

          docker images $IMAGE_REPO \
            --format "{{.Repository}}:{{.Tag}} {{.CreatedAt}}" | \
            sort -rk2 | \
            awk '{print $1}' | \
            tail -n +$((KEEP_IMAGES + 1)) | \
            xargs -r docker rmi -f || true
        '''
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'trivy-report.html', fingerprint: true
      echo "✅ Pipeline completed"
      echo "📦 Image pushed: $IMAGE"
      echo "🔐 Signed digest: $IMAGE_DIGEST"
      echo "🧹 Local images cleaned (kept latest $KEEP_IMAGES)"
    }
  }
}
