<template>
  <q-layout>
    <q-pagination
      v-model="currentPageNumber"
      :max="maxPageCount"
    />
    <q-list-header>Teams</q-list-header>
    <q-list
      v-for="team of teams"
      :key="team.key"
      highlight
    >
      <q-item @click="continueToTeamInfo(team)">
        {{ team.nickname }}
      </q-item>
    </q-list>
  </q-layout>
</template>

<script>
import {
  QBtn,
  QItem,
  QItemSide,
  QLayout,
  QList,
  QListHeader,
  QPagination
} from 'quasar'
import { researchGetters, researchActions } from '@state/helpers'
export default {
  components: {
    QBtn,
    QItem,
    QItemSide,
    QLayout,
    QList,
    QListHeader,
    QPagination
  },
  data() {
    return {
      currentPageNumber: 1,
      maxPageCount: 15
    }
  },
  computed: {
    ...researchGetters
  },
  watch: {
    teams() {
      this.updateTeamsList()
    }
  },
  mounted() {
    this.getTeamList(this.currentPageNumber - 1)
  },
  methods: {
    ...researchActions,
    updateTeamsList() {
      this.getTeamList(this.currentPageNumber - 1)
    },
    continueToTeamInfo(team) {
      this.updateCurrentSelectedTeam(team)
      this.$router.push('/team-info')
    }
  }
}
</script>
