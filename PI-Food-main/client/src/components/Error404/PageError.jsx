import React from "react";




export default function PageError({location}) {
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <h3> The requested URL <code>{location.pathname}</code> was not found</h3>
        </div>
    );
}


