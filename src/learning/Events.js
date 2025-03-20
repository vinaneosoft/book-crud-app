


export function Events(){
    function test(){
        console.log("in function");
        
    }
    function test2(e){
        console.log(e.target);
        
    }

    const test3=(companyName)=>{
        console.log(companyName);
        
    }

    function test4(companyName, event){
        console.log(companyName);
        console.log(event);
    }

    return (
        <div>
            <button onClick={test}>CLICK</button>
            <input type="text" onFocus={test2}></input>
            <button onMouseOver={()=>test3("Neosoft")}>PASS COMPANY</button>
            <button onDoubleClick={(ev)=>test4("Neosoft", ev)}>DOUBLE CLICK</button>
        </div>
    );
}