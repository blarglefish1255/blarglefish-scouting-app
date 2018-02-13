import { LocalStorage } from 'quasar'

export default {
  state: {
    currentActiveTemplateIndex: 0,
    currentSelectedTemplateIndex: 0,
    templates: []
  },
  mutations: {
    INIT_TEMPLATES(state, templates) {
      state.templates = templates
    },
    ADD_TEMPLATE(state, newTemplate) {
      state.templates.push(newTemplate)
    },
    ADD_NEW_TEMPLATE_ELEMENT(state, newElement) {
      state.templates[state.currentSelectedTemplateIndex].elements.push(
        newElement
      )
    },
    SET_SELECTED_CURRENT_TEMPLATE(state) {
      for (const template of state.templates) {
        if (
          state.templates.indexOf(template) !==
          state.currentSelectedTemplateIndex
        ) {
          state.templates[state.templates.indexOf(template)].selected = false
        }
      }
      state.templates[state.currentSelectedTemplateIndex].selected = true
    },
    SET_ACTIVE_CURRENT_TEMPLATE(state) {
      for (const template of state.templates) {
        if (
          state.templates.indexOf(template) !== state.currentActiveTemplateIndex
        ) {
          state.templates[state.templates.indexOf(template)].active = false
        }
      }
      state.templates[state.currentActiveTemplateIndex].active = true
    },
    SET_SELECTED_CURRENT_TEMPLATE_INDEX(state, currentSelectedTemplateIndex) {
      state.currentSelectedTemplateIndex = currentSelectedTemplateIndex
    },
    SET_ACTIVE_CURRENT_TEMPLATE_INDEX(state, currentActiveTemplateIndex) {
      state.currentActiveTemplateIndex = currentActiveTemplateIndex
    }
  },
  actions: {
    initTemplates({ commit }) {
      let templates

      if (LocalStorage.get.item('templates')) {
        templates = LocalStorage.get.item('templates')
      } else {
        templates = []
      }

      commit('INIT_TEMPLATES', templates)
    },
    addTemplate({ state, commit }, newTemplate) {
      commit('ADD_TEMPLATE', newTemplate)
      LocalStorage.set('templates', state.templates)
    },
    addNewTemplateElement({ state, commit }, newElement) {
      if (state.templates[state.currentSelectedTemplateIndex]) {
        if (state.templates[state.currentSelectedTemplateIndex].elements) {
          commit('ADD_NEW_TEMPLATE_ELEMENT', newElement)
          LocalStorage.set('templates', state.templates)
        }
      }
    },
    updateCurrentActiveTemplate({ state, commit }, index) {
      commit('SET_ACTIVE_CURRENT_TEMPLATE_INDEX', index)
      LocalStorage.set('activeTemplateIndex', state.currentActiveTemplateIndex)
      commit('SET_ACTIVE_CURRENT_TEMPLATE', index)
      LocalStorage.set('templates', state.templates)
    },
    updateCurrentTemplate({ state, commit }, index) {
      commit('SET_SELECTED_CURRENT_TEMPLATE', index)
      LocalStorage.set('templates', state.templates)
    },
    updateCurrentSelectedTemplateIndex({ state, commit }, index) {
      commit('SET_SELECTED_CURRENT_TEMPLATE_INDEX', index)
    }
  }
}
