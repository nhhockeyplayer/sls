import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RadioComponent } from './radio.component';

export default {
  title: 'RadioComponent',
  component: RadioComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<RadioComponent>;

const Template: Story<RadioComponent> = (args: RadioComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}