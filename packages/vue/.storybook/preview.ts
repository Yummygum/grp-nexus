import type { Preview, VueRenderer } from '@storybook/vue3'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    withThemeByDataAttribute<VueRenderer>({
      themes: {
        whitelabel: 'whitelabel',
        municipal: 'municipal',        
      },
      defaultTheme: 'whitelabel',
      attributeName: 'data-theme'
    })
  ]
}

export default preview
