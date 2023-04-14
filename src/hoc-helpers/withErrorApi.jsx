import { useState } from "react";
import ErrorMessage from "@components/ErrorMessage";

export const withErrorApi = View => {
     return props => {
          const [errorApi, setErrorApi] = useState(false);

          return ( errorApi 
                    ? <ErrorMessage>
                         The dark side of the force has won. <br />
                         We cannot display the data. <br />
                         Come back when we fix everything.
                    </ErrorMessage>
                    : <View setErrorApi={setErrorApi} {...props}/> )
     };
};