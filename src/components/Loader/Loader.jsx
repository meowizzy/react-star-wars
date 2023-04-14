import ContentLoader from "react-content-loader";

export const Loader = ({...props}) => {
     return (
          <ContentLoader 
               speed={2}
               width={280}
               height={380}
               viewBox="0 0 280 380"
               backgroundColor="#3d3d3d"
               foregroundColor="#575757"
               {...props}
               >
               <rect x="307" y="372" rx="0" ry="0" width="81" height="92" /> 
               <rect x="125" y="178" rx="0" ry="0" width="1" height="0" /> 
               <rect x="87" y="140" rx="0" ry="0" width="1" height="0" /> 
               <rect x="0" y="0" rx="5" ry="5" width="280" height="340" /> 
               <rect x="0" y="350" rx="5" ry="5" width="280" height="30" />
          </ContentLoader>
     )
}