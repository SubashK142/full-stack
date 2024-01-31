import CustomSideNav from "./sidenav";
import LineChart from "./LineChart";



function Admin(){

    return(

        <div style={{display:'flex'}}>

            <CustomSideNav/>
        
        <div style={{marginTop:100,marginLeft:100}}>
            <LineChart/>
        </div>
        
        </div>
    );
}
export default Admin;