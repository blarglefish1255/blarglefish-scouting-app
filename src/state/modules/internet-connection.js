import ping from 'ping'

export default {
  state: {
    hasInternetConnection: true
  },
  mutations: {
    SET_HAS_INTERNET_CONNECTION(state, newValue) {
      state.hasInternetConnection = newValue
    }
  },
  actions: {
    initInternetConnectionChecker({ dispatch }) {
      // Run the check once before imposing the
      // five second time interval
      dispatch('checkInternetConnection')
      // Run this check every five seconds
      setInterval(() => {
        dispatch('checkInternetConnection')
      }, 5000)
    },
    checkInternetConnection({ state, commit }) {
      const hosts = ['google.com', 'yahoo.com', 'github.com']
      let oneHostPingable = false

      const pings = hosts.map(host => {
        return ping.promise.probe(host).then(response => {
          // Here we ensure that at least one of the hosts
          // that we attempt to ping is pingable.
          if (response.alive) {
            oneHostPingable = true
          }
        })
      })

      Promise.all(pings).then(() => {
        if (oneHostPingable !== state.hasInternetConnection) {
          commit('SET_HAS_INTERNET_CONNECTION', oneHostPingable)
        }
      })
    }
  }
}
