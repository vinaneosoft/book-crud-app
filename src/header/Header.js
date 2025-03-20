import { Navbar } from "../navbar/Navbar";



export function Header(props){
    const heading="BOOK CRUD";

    return (
        <header>
             <h3 className="text-center text-white bg-dark">{heading}</h3>
              <Navbar mainHeading={props.mainHeading}></Navbar>
        </header>
   
    );
}