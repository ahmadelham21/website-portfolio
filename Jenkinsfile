pipeline {
  agent any

  environment {
    DOCKER_IMAGE = 'website-portfolio'
    DOCKER_TAG = 'latest'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'development', url: 'https://github.com/ahmadelham21/website-portfolio.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
        }
      }
    }

    stage('Run Docker Container') {
      steps {
        script {
          // Hentikan container lama jika ada
          bat 'docker stop react-app || true'
          bat 'docker rm react-app || true'

          // Jalankan container baru
          bat "docker run -d --name react-app -p 3000:80 ${DOCKER_IMAGE}:${DOCKER_TAG}"
        }
      }
    }
  }

  post {
    success {
      echo 'Deployment berhasil!'
    }
    failure {
      echo 'Deployment gagal!'
    }
  }
}