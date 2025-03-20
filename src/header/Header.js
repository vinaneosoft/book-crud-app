import { Navbar } from "../navbar/Navbar";



export function Header(props){
    const heading="BOOK CRUD";

    function getYear(year){
        console.log(year);
       
    }
    return (
        <header>
             <h3 className="text-center text-white bg-dark">{heading}</h3>
              <Navbar mainHeading={props.mainHeading} getYear={getYear}></Navbar>
        </header>
   
    );
}