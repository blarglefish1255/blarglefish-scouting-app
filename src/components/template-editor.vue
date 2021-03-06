<template>
  <q-layout view="hHr LpR lFf">
    <q-toolbar
      slot="header"
      :color="theme"
    >
      <q-btn
        flat
        @click="backToTemplates"
      >
        <q-icon
          name="fa-chevron-left"
          size="20px"
        />
      </q-btn>
      <q-toolbar-title> {{ templates[currentSelectedTemplateIndex].title }} </q-toolbar-title>
    </q-toolbar>

    <TemplateElements
      v-if="templates[currentSelectedTemplateIndex].elements.length"
      :elements="templates[currentSelectedTemplateIndex].elements"
    />
    <p
      v-else
      class="absolute-center"
    >
      Template Empty
    </p>

    <q-fixed-position
      corner="bottom-right"
      :offset="[18, 18]"
    >
      <q-fab
        :color="theme"
        direction="up"
      >
        <q-fab-action
          color="orange"
          icon="fa-sticky-note-o"
          @click="addNote"
        >
          <q-tooltip
            anchor="center left"
            self="center right"
            :offset="[20, 0]"
          >
            Add Note
          </q-tooltip>
        </q-fab-action>

        <q-fab-action
          color="blue"
          icon="fa-clock-o"
          @click="addStopwatch"
        >
          <q-tooltip
            anchor="center left"
            self="center right"
            :offset="[20, 0]"
          >
            Add Stopwatch
          </q-tooltip>
        </q-fab-action>
        <q-fab-action
          color="green"
          icon="fa-list"
          @click="addSelector"
        >
          <q-tooltip
            anchor="center left"
            self="center right"
            :offset="[20, 0]"
          >
            Add Selector
          </q-tooltip>
        </q-fab-action>
        <q-fab-action
          color="dark"
          icon="fa-check-square"
          @click="addCheckbox"
        >
          <q-tooltip
            anchor="center left"
            self="center right"
            :offset="[20, 0]"
          >
            Add Checkbox
          </q-tooltip>
        </q-fab-action>
      </q-fab>
    </q-fixed-position>
  </q-layout>
</template>

<script>
import cuid from 'cuid'
import TemplateElements from './template-elements'
import {
  Dialog,
  QBtn,
  QFab,
  QFabAction,
  QFixedPosition,
  QIcon,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QTooltip,
  Toast
} from 'quasar'
import {
  interfaceGetters,
  templatesGetters,
  templatesActions
} from '@state/helpers'
export default {
  components: {
    QBtn,
    QIcon,
    QFab,
    QFabAction,
    QFixedPosition,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QTooltip,
    TemplateElements
  },
  computed: {
    ...interfaceGetters,
    ...templatesGetters
  },
  methods: {
    ...templatesActions,
    backToTemplates() {
      this.updateCurrentTemplate(-1)
      this.$router.push('/templates')
    },
    addNote() {
      Dialog.create({
        title: 'Note label',
        message: 'Add a label to the note to identify its use.',
        form: {
          label: {
            type: 'text',
            label: 'Label',
            model: ''
          }
        },
        buttons: [
          'Cancel',
          {
            label: 'Create',
            handler: data => {
              this.addNewTemplateElement({
                id: cuid(),
                label: data.label,
                type: 'note',
                value: ''
              })
            }
          }
        ]
      })
    },
    addCheckbox() {
      Dialog.create({
        title: 'Checkbox label',
        message: 'Add a label to the note to identify its use.',
        form: {
          label: {
            type: 'text',
            label: 'Label',
            model: ''
          }
        },
        buttons: [
          'Cancel',
          {
            label: 'Create',
            handler: data => {
              this.addNewTemplateElement({
                id: cuid(),
                label: data.label,
                type: 'checkbox',
                value: ''
              })
            }
          }
        ]
      })
    },
    addStopwatch() {
      Dialog.create({
        title: 'Stopwatch label',
        message: 'Add a label to the note to identify its use.',
        form: {
          label: {
            type: 'text',
            label: 'Label',
            model: ''
          }
        },
        buttons: [
          'Cancel',
          {
            label: 'Create',
            handler: data => {
              this.addNewTemplateElement({
                id: cuid(),
                label: data.label,
                type: 'stopwatch',
                value: ''
              })
            }
          }
        ]
      })
    },
    addSelector() {
      Dialog.create({
        title: 'Selector label',
        message: 'Add a label to the note to identify its use.',
        form: {
          visibleOptions: {
            type: 'chips',
            label: 'Current Options',
            model: []
          },
          title: {
            type: 'text',
            label: 'Selector label',
            model: ''
          }
        },
        buttons: [
          {
            label: 'Create',
            preventClose: true,
            handler: data => {
              if (data.visibleOptions.length === 0) {
                Toast.create(
                  'Add an element to the selector before trying to create it.'
                )
                return
              }

              let selectorOptions = []
              for (const option of data.visibleOptions) {
                selectorOptions.push({
                  label: option,
                  value: option
                })
              }

              this.addNewTemplateElement({
                id: cuid(),
                label: data.title,
                type: 'selector',
                value: '',
                options: selectorOptions
              })
            }
          },
          {
            label: 'Add',
            preventClose: true,
            handler: data => {
              if (!data.option) return
              data.visibleOptions.push(data.option)
            }
          }
        ]
      })
    }
  }
}
</script>
