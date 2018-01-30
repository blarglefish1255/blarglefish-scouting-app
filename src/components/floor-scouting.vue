<template>
  <div>
    <q-list
      v-for="team of scoutedTeams"
      :key="team.key"
      highlight
    >
      <q-item>
        {{ team.team_number + ' ' + team.nickname }}
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
import { Dialog, QBtn, QFixedPosition, QItem, QLayout, QList } from 'quasar'
import {
  interfaceGetters,
  scoutingGetters,
  scoutingActions,
  researchActions
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
    ...researchActions,
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
          }
        },
        buttons: [
          'Cancel',
          {
            label: 'Add',
            handler(data) {
              self.addScoutedTeams(data.number)
            }
          }
        ]
      })
    }
  }
}
</script>
