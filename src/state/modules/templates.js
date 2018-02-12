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
    ADD_NEW_TEMPLATE_ELEMENT(state, templateIndex, newElement) {
      state.templates[templateIndex].elements.push(newElement)
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
    addNewTemplateElement({ state, commit }, newValue) {
      if (state.templates[newValue.templateIndex]) {
        if (state.templates[newValue.templateIndex].elements) {
          commit('ADD_NEW_TEMPLATE_ELEMENT', state.index, newValue.elements)
          LocalStorage.set('templates', state.templates)
        }
      }
    },
    updateCurrentActiveTemplate({ state, commit }, index) {
      commit('SET_ACTIVE_CURRENT_TEMPLATE_INDEX', index)
      LocalStorage.set('activeTemplateIndex', state.currentActiveTemplateIndex)
      commit('SET_ACTIVE_CURRENT_TEMPLATE', index)
      LocalStorage.set('templates', state.templates)

      console.log(state.templates)
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
