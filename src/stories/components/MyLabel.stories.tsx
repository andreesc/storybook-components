import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: {control: 'select', options: ['primary', 'secondary', 'tertiary']}
    }
} as ComponentMeta<typeof MyLabel>

const Template:ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});

Basic.args = {
    size: "normal",
    label: "No Label",
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    color: 'primary',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac',
}

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: 'h1',
    fontColor: '#fff',
    backgroundColor: '#000',
}