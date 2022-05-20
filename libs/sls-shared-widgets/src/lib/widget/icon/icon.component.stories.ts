import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { IconComponent } from './icon.component';

export default {
  title: 'IconComponent',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<IconComponent>;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}