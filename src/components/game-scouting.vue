<template>
  <div>
    <q-list
      v-for="team of scoutedTeams"
      :key="team.id"
      highlight
    >
      <q-item>
        {{ team.name }}
      </q-item>
    </q-list>
    <q-fixed-position
      corner="bottom-right"
      :offset="[18, 18]"
    >
      <q-btn
        :color="theme"
        @click="addTeam"
        icon="add"
        round
      />
    </q-fixed-position>
  </div>
</template>

<script>
import cuid from 'cuid'
import { Dialog, QBtn, QFixedPosition, QItem, QLayout, QList } from 'quasar'
import {
  interfaceGetters,
  scoutingGetters,
  scoutingActions
} from '@state/helpers'
export default {
  components: {
    QBtn,
    QFixedPosition,
    QItem,
    QLayout,
    QList
  },
  computed: {
    ...interfaceGetters,
    ...scoutingGetters
  },
  methods: {
    ...scoutingActions,
    addTeam() {
      const self = this
      Dialog.create({
        title: 'Add Team',
        form: {
          number: {
            type: 'text',
            label: 'Number',
            model: ''
          },
          name: {
            type: 'text',
            label: 'Name',
            model: ''
          }
        },
        buttons: [
          'Cancel',
          {
            label: 'Add',
            handler(data) {
              let team = {
                id: cuid(),
                name: data.name,
                number: data.number
              }
              self.addScoutedTeams(team)
            }
          }
        ]
      })
    }
  }
}
</script>
