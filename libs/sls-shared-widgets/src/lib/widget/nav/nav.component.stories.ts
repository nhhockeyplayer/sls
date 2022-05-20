import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NavComponent } from './nav.component';

export default {
  title: 'NavComponent',
  component: NavComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<NavComponent>;

const Template: Story<NavComponent> = (args: NavComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}