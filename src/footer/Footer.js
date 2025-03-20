import './footer.css';
export function Footer({mainHeading, xyz}){
 const headingStyle={
    color:'red',
    textTransform:'uppercase'
 }

    return (
        <footer className="myFooter">
             <h4 style={headingStyle}>footer component</h4>
             <h5>{mainHeading}</h5>
        </footer>   
   
    );
}