import { UiInput } from "./UiInput";
import { useState } from "react";

export default {
     title: 'Ui-Kit/UiInput',
     component: UiInput
};


const Template = arg => {
     const [value, setValue] = useState('');

     return (
          <UiInput 
               {...arg}
               value={value}
               setValue={setValue}
          />
     );
}

const props = {
     inputType: "",
     placeholder: "Placeholder",
     value: "",
     setValue: () => console.log("Input change handler")
};

export const Default = Template.bind({});

Default.args = {
     ...props
}