<template>
  <div>
    <q-list
      v-for="(team, index) of filteredTeams"
      :key="team.key"
      highlight
    >
      <q-item
        @click.self="goToTeamInfo(team)"
        class="team-item"
      >
        {{ team.team_number + ' ' + team.nickname }}
        <q-btn
          flat
          class="delete-icon"
          @click="handler(index)"
        >
          <q-icon
            name="fa-times"
          />
        </q-btn>
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
import {
  Dialog,
  QBtn,
  QFixedPosition,
  QIcon,
  QItem,
  QLayout,
  QList
} from 'quasar'
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
    QIcon,
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
    handler(index) {
      Dialog.create({
        title: 'Delete Team',
        message: 'Are you sure you want to delete this team?',
        buttons: [
          'No',
          {
            label: 'Yes',
            handler: data => {
              this.deleteScoutedTeam(index)
            }
          }
        ]
      })
    },
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
                this.addScoutedTeams({ team_number: data.number })
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

<style>
.team-item {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  overflow: hidden;
}
</style>
