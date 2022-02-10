import './ButtonStyles.css';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

// // More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
// const Template = ({ label, type, ...args }) => {
//   // You can either use a function to create DOM elements or use a plain html string!
//   // return `<div>${label}</div>`;
//   // return createButton({ label, ...args });
//   // if ( 'Primary' == type ) {
//   //   return `<a href="#" class="button-primary">${label}</a>`;
//   // }
//   const disabled = 

//   if ( 'Secondary' == type ) {
//     return `<a href="#" class="button-secondary">${label}</a>`;
//   }
//   return `<a href="#" class="button-primary">${label}</a>`;
// };


// Primary
export const Primary = ({ label, disabled, ...args }) => {
  const disabled_arg = ( disabled ) ? "disabled" : "";
  return (`<button class="button-primary" ${disabled_arg}>${label}</button>`);
};
Primary.args = {
  label: 'Button',
  disabled: false,
}

// Secondary
export const Secondary = ({ label, disabled, ...args }) => {
  const disabled_arg = ( disabled ) ? "disabled" : "";
  return (`<button class="button-secondary" ${disabled_arg}>${label}</button>`);
};
Secondary.args = {
  label: 'Button',
  disabled: false,
}