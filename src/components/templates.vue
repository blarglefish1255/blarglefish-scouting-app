<template>
  <q-layout view="hHr LpR lFf">
    <q-toolbar
      slot="header"
      :color="theme"
    >
      <q-btn
        flat
        @click="$router.push('/settings')"
      >
        <q-icon
          name="fa-chevron-left"
          size="20px"
        />
      </q-btn>
      <q-toolbar-title>
        Templates
      </q-toolbar-title>
    </q-toolbar>

    <q-list
      v-for="(template, index) of templates"
      :key="template.id"
      highlight
    >
      <q-item
        @click="continueToTemplate(index)"
      >
        {{ template.title }}
        <q-icon
          v-if="template.active"
          name="fa-circle"
          class="active-template-icon"
        />
        <q-btn
          v-else
          flat
          ref="target"
        >
          <q-icon name="fa-ellipsis-h"/>
          <q-popover ref="popover">
            <q-item
              link
              @click="updateActiveTemplate(index)"
            >
              Make Active Template
            </q-item>
          </q-popover>
        </q-btn>
      </q-item>
    </q-list>

    <q-fixed-position
      corner="bottom-right"
      :offset="[18, 18]"
    >
      <q-btn
        :color="theme"
        @click="createTemplate"
        icon="add"
        round
      />
    </q-fixed-position>
  </q-layout>
</template>

<script>
import cuid from 'cuid'
import {
  Dialog,
  QBtn,
  QFixedPosition,
  QIcon,
  QItem,
  QLayout,
  QList,
  QPopover,
  QToolbar,
  QToolbarTitle,
  TouchHold
} from 'quasar'
import {
  interfaceGetters,
  templatesGetters,
  templatesActions
} from '@state/helpers'
export default {
  components: {
    QBtn,
    QFixedPosition,
    QIcon,
    QItem,
    QLayout,
    QList,
    QPopover,
    QToolbar,
    QToolbarTitle
  },
  directives: {
    TouchHold
  },
  computed: {
    ...interfaceGetters,
    ...templatesGetters
  },
  methods: {
    ...templatesActions,
    updateActiveTemplate(index) {
      this.updateCurrentActiveTemplate(index)
    },
    createTemplate() {
      Dialog.create({
        title: 'Create Template',
        message: 'Create a template to use when scouting.',
        form: {
          title: {
            type: 'text',
            label: 'Title',
            model: ''
          }
        },
        buttons: [
          'Cancel',
          {
            label: 'Create',
            handler: data => {
              let template = {
                id: cuid(),
                title: data.title,
                elements: [],
                active: false,
                selected: true
              }
              this.addTemplate(template)
            }
          }
        ]
      })
    },
    continueToTemplate(index) {
      this.updateCurrentSelectedTemplateIndex(index)
      this.$router.push('/template-editor')
    }
  }
}
</script>

<style>
.active-template-icon {
  margin-left: 10px;
}
</style>
