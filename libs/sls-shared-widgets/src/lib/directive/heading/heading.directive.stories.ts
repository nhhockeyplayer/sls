import {Meta, moduleMetadata, Story} from '@storybook/angular'
import {HeadingDirective} from './heading.directive'

export default {
    title: 'HeadingDirective',
    component: HeadingDirective,
    decorators: [
        moduleMetadata({
            imports: [],
        })
    ],
} as Meta<HeadingDirective>

export const withDefault: Story = () => {
    return {
        template: `
            <h1  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h1>
            <h2  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h2>
            <h3  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h3>
            <h4  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h4>
            <h5  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h5>
            <h6  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h6>
            <div slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</div>
            <span slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</span>
    `
    }
}

export const withAlign: Story = () => {
    return {
        template: `
            <h1  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h1>
            <h2  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h2>
            <h3  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h3>
            <h4  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h4>
            <h5  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h5>
            <h6  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h6>
            <div slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</div>
            <span slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</span>
    `
    }
}


export const withTruncate: Story = () => {
    return {
        template: `
            <h1  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h1>
            <h2  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h2>
            <h3  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h3>
            <h4  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h4>
            <h5  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h5>
            <h6  slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</h6>
            <div slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</div>
            <span slsHeading>ONCE UPON A TIME, IN A FAR AWAY PLACE, FAR FAR AWAY</span>
    `
    }
}

