import ContentLoader from "react-content-loader";

export const Loader = ({inList = true, ...props}) => {

     return (
          inList ? 
          <ContentLoader 
               speed={2}
               width={280}
               height={380}
               viewBox="0 0 280 380"
               backgroundColor="#3d3d3d"
               foregroundColor="#575757"
               {...props}
               >
               <rect x="-66" y="-20" rx="0" ry="0" width="1" height="0" /> 
               <rect x="-104" y="-58" rx="0" ry="0" width="1" height="0" /> 
               <rect x="0" y="0" rx="5" ry="5" width="280" height="380" />
          </ContentLoader>
          :
          <ContentLoader 
               speed={2}
               width={622}
               height={550}
               viewBox="0 0 622 550"
               backgroundColor="#3d3d3d"
               foregroundColor="#575757"
               {...props}
               >
               <rect x="-66" y="-20" rx="0" ry="0" width="1" height="0" /> 
               <rect x="-104" y="-58" rx="0" ry="0" width="1" height="0" /> 
               <rect x="0" y="0" rx="5" ry="5" width="400" height="550" /> 
               <rect x="443" y="0" rx="5" ry="5" width="173" height="25" /> 
               <rect x="444" y="35" rx="3" ry="3" width="173" height="7" /> 
               <rect x="444" y="50" rx="3" ry="3" width="173" height="7" /> 
               <rect x="444" y="65" rx="3" ry="3" width="173" height="7" />
          </ContentLoader>
     )
}