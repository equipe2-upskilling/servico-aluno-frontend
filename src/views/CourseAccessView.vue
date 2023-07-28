<script setup>
import { onMounted, ref, computed } from 'vue'
import { useUsersCoursesStore, useAuthStore } from '@/stores'
import { useRoute } from 'vue-router'

const usersCoursesStore = useUsersCoursesStore()

const lessons = computed(() => usersCoursesStore.listLessons)
const calcPercentage = computed(() => usersCoursesStore.calcPercentage)
const { user } = useAuthStore()

const course = computed(() => usersCoursesStore.course)

const idCourse = ref(0)
const certificateAvailable = computed(() => {
  return calcPercentage.value === 100
})

function countCompleted() {
  var ret = usersCoursesStore.countCompleted()
  return ret
}

function buscarCursoMatriculado(idUser, idCourse) {
  usersCoursesStore.getUserCourse(idUser, idCourse)
}

function checkAsCompleted(idLesson) {
  //console.log(idLesson)
  usersCoursesStore.markLessonCompleted(idLesson)
  var panel = document.querySelector('#panel-' + idLesson + ' button')
  panel.click()
}
onMounted(() => {
  idCourse.value = useRoute().params.id

  buscarCursoMatriculado(user.id, idCourse.value)
})

const approved = false
</script>

<template>
  <v-container id="course-access">
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="8" xl="8" xxl="8">
        <v-container class="ctnr-video">
          <div class="video">
            <v-img :src="course.image" cover width="100%"></v-img>
          </div>
          <div class="title">{{ course.name }}</div>
          <div class="descr" width="100%">{{ course.description }}</div>
          <v-card id="completed-card" class="completed" v-show="certificateAvailable">
            <div v-show="!approved">
              <div class="msg1">
                <v-icon aria-hidden="false" size="small">mdi-check-circle</v-icon>Você concluiu o
                conteúdo do curso, envie o link do repositório do seu trabalho final.
              </div>
              <div><v-text-field label="Link do repositório"></v-text-field></div>
              <div align="right">
                <RouterLink class="text-blue text-decoration-none" to="/enviar-projeto">
                  <v-btn class="text-none mb-4" color="indigo-darken-2" size="x-large" outlined
                    >Enviar</v-btn
                  >
                </RouterLink>
              </div>
              <div>
                <i
                  >** Você verá o link para o certificado após ser aprovado, aqui e em
                  "Certificados" no menu principal.</i
                >
              </div>
            </div>
            <div v-show="approved" align="right">
              <v-btn
                class="align-self-center btn-certificate"
                rounded="md"
                color="#2E7D32"
                bg-color="#2E7D32"
                size="large"
                flat
                :disabled="!certificateAvailable"
              >
                Obter certificado
              </v-btn>
            </div>
          </v-card>
        </v-container>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="4" xl="4" xxl="4">
        <v-container>
          <div class="progress">
            <div class="bar">
              <v-progress-linear
                class="align-self-center"
                :size="80"
                :height="26"
                :model-value="calcPercentage"
                color="success"
                bg-color="#FFF"
                bg-opacity="0.2"
              >
                {{ calcPercentage }}
              </v-progress-linear>
            </div>
            <div class="statistic">Aula {{ countCompleted() }}</div>
          </div>
          <div class="content">
            <div class="w-100">
              <div>Aulas</div>
              <v-expansion-panels
                v-for="(lesson, index) in lessons"
                :key="index"
                :id="'panel-' + lesson.id"
              >
                <v-expansion-panel class="my-2">
                  <v-expansion-panel-title>
                    {{ lesson.lessonTitle }}
                    <template v-slot:actions="{ expanded }">
                      <v-icon
                        :color="lesson.isCompleted ? '#2E7D32' : '#EF5350'"
                        :icon="lesson.isCompleted ? 'mdi-check-circle' : 'mdi-alert-circle'"
                      ></v-icon>
                    </template>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <div class="content-descr">
                      {{ lesson.lessonDescription }}
                    </div>
                    <v-btn
                      @click="checkAsCompleted(lesson.id)"
                      rounded="lg"
                      color="success"
                      size="small"
                      class="ml-auto"
                    >
                      Marcar como finalizada
                    </v-btn>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
#course-access .title {
  margin: 0px !important;
}
#course-access .descr {
  margin-bottom: 16px !important;
}
#course-access .video {
  margin-bottom: 10px !important;
  cursor: pointer !important;
}
#course-access .content {
  margin: 10px 0px !important;
}
#course-access .progress {
  background-color: #444;
  padding: 6px;
  border-radius: 4px;
  color: #fff;
}
#course-access .v-progress-linear div:first-child {
  opacity: 1 !important;
}
#course-access .statistic {
  font-size: 14px;
  font-weight: normal;
  padding: 0px 6px;
  padding-top: 4px;
  text-align: right;
}
#course-access .v-expansion-panels {
  margin: 0px !important;
  padding: 0px !important;
  display: block;
}
#course-access .completed {
  padding: 12px;
}
#course-access .completed .v-btn {
  max-width: 240px;
  min-width: 240px;
}
#course-access .completed .v-btn a,
#course-access .btn-certificate {
  color: #fff !important;
  font-size: 14px;
}
#course-access .completed .v-field__input {
  margin: 0px;
}
#course-access .completed .msg1 {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #2e7d32;
  color: #fff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
}
#course-access .completed .v-icon {
  padding: 0px 18px;
  font-size: 28px;
}
#course-access .content-descr {
  margin-bottom: 6px;
  font-size: 14px !important;
  font-style: italic;
  color: #444;
}
</style>
