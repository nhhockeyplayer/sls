import {Meta, moduleMetadata, Story} from '@storybook/angular'
import {ButtonComponent} from './button.component'

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ButtonComponent>

export const withPrimary: Story = () => {
  return {
    template: `
        <sls-button  [type]="'button'"  [size]="'sm'" [border]="'info'">SUBMIT</sls-button>
                <sls-button  [type]="'button'"  [size]="'sm'" [border]="'info'">SUBMIT</sls-button>
                        <sls-button  [type]="'button'"  [size]="'sm'" [border]="'info'">SUBMIT</sls-button>
    `
  }
}

export const withSubmit: Story = () => {
  return {
    template: `
        <sls-button  [type]="'reset'"  [size]="'lg'">SUBMIT</sls-button>
            <sls-button  [type]="'reset'"  [size]="'lg'">SUBMIT</sls-button>
                <sls-button  [type]="'reset'"  [size]="'lg'">SUBMIT</sls-button>
    `
  }
}

export const withReset: Story = () => {
  return {
    template: `
        <sls-button  [type]="'reset'"  [size]="'lg'">RESET</sls-button>
                <sls-button  [type]="'reset'"  [size]="'lg'">RESET</sls-button>
                        <sls-button  [type]="'reset'"  [size]="'lg'">RESET</sls-button>
    `
  }
}

export const withBlock: Story = () => {
  return {
    template: `
        <sls-button [size]="'block'" [border]="'warning'">BLOCK</sls-button>
                <sls-button [size]="'block'" [border]="'warning'">BLOCK</sls-button>
                        <sls-button [size]="'block'" [border]="'warning'">BLOCK</sls-button>
    `
  }
}
