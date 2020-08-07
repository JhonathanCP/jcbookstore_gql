<template>
  <div>
      <Navbar />
      <v-container>
          <h1 class="blue--text text--darken-3">Hola {{fullName}}</h1>
          <p class="font-italic blue--text text--accent-4">Bienvenido a JCBookstore</p>
          <v-row>
              <v-btn dark color="blue darken-2" outlined class="mr-4">
                  Gestión de autores
              </v-btn>
              <v-btn dark color="indigo darken-2" outlined>
                  Gestión de libros
              </v-btn>
          </v-row>
      </v-container>
      <Modal v-slot:default="{ closeModal }">
          <v-card>
              <v-card-title>
                  <span>Edita tus datos personales</span>
              </v-card-title>
              <v-card-text>
                  <v-container>
                      <v-row>
                          <v-text-field label="Nombre" v-model="user.name"></v-text-field>
                          <v-text-field label="Apellido" v-model="user.lastname"></v-text-field>
                      </v-row>
                      <v-row>
                          <v-text-field type="Password" label="Nueva Contraseña" v-model="password"></v-text-field>
                      </v-row>
                  </v-container>
              </v-card-text>
              <v-card-actions>
                  <v-btn color="red" dark @click="closeModal(false)">Cerrar</v-btn>
                  <v-btn color="blue darken-1" dark @click="updateUser(closeModal)">Editar</v-btn>
              </v-card-actions>
          </v-card>
      </Modal>
  </div>
</template>

<script>
import Modal from '../components/Modal'
export default {
    name: 'Home',
    components: {
        Modal
    },
    data(){
        return {
            user:{
                name:'',
                lastname: ''
            },
            password: ''
        }
    },
    inject: ['state'],
    computed: {
        fullName(){
            return `${this.state.user.name} ${this.state.user.lastname}`
        }
    },
    methods: {
        /* updateUser(closeModalAction){

        } */
    }
}
</script>

<style>

</style>