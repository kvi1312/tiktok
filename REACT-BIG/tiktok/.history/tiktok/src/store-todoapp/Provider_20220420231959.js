import Context from "./store-todoapp";

function Provider({children}){
   return(
      <div className="">
         <Context></Context>
      </div>
   )
}