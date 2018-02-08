import { LocalStorage } from 'quasar'

export default {
  state: {
    currentTemplate: null,
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
      state.currentTemplate.elements.push(newElement)
    },
    SET_CURRENT_TEMPLATE(state, newCurrentTemplate) {
      state.currentTemplate = newCurrentTemplate
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
      if (state.currentTemplate) {
        if (state.currentTemplate.elements) {
          commit('ADD_NEW_TEMPLATE_ELEMENT', newElement)
          LocalStorage.set('templates', state.templates)
        }
      }
    },
    updateCurrentTemplate({ state, commit }, newCurrentTemplate) {
      commit('SET_CURRENT_TEMPLATE', newCurrentTemplate)
      LocalStorage.set('currentTemplate', state.currentTemplate)
    }
  }
}
