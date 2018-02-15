<template>
  <div>
    <q-list
      v-for="team of filteredTeams"
      :key="team.key"
      highlight
    >
      <q-item @click="goToTeamInfo(team)">
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
  researchGetters,
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
  props: {
    filteredTeams: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...interfaceGetters,
    ...researchGetters,
    ...scoutingGetters
  },
  methods: {
    ...researchActions,
    ...scoutingActions,
    goToTeamInfo(team) {
      this.updateCurrentSelectedTeam(team)
      this.$router.push('/team-info')
    },
    addTeam() {
      if (navigator.onLine) {
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
              handler: data => {
                this.addScoutedTeams(data.number)
              }
            }
          ]
        })
      } else {
        Dialog.create({
          title: 'Add Team',
          form: {
            number: {
              type: 'text',
              label: 'Number',
              model: ''
            },
            nickname: {
              type: 'text',
              label: 'Name',
              model: ''
            }
          },
          buttons: [
            'Cancel',
            {
              label: 'Add',
              handler: data => {
                this.addScoutedTeams({
                  team_number: data.number,
                  nickname: data.nickname
                })
              }
            }
          ]
        })
      }
    }
  }
}
</script>
