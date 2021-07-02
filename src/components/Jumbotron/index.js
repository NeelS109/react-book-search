import React from "react";

function Jumbotron ({children}){
    const background = "/googlebooks.jpeg"
    //https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2721&q=80
    return (
        <div 
            style={{clear:"both",marginTop:30, 
                paddingTop: 120, 
                paddingBottom: 120, 
                textAlign: "center",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: "url(" + background + ")"
                }}
            className="jumbotron border">
            {children}
        </div>
    )
}

export default Jumbotron