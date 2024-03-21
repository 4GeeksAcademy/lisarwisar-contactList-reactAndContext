import React from "react";

import "../../styles/contacts.css";

export const Contacts = () => {

    return(
        <div className="container-fluid">
            <div className="row mx-5">
                <div className="col-12 d-flex justify-content-end py-3">
                    <button className="addContactButton">Add new contact</button>
                </div>
                <div className="col-12 contactCard">
                    Hola
                </div>
            </div>
        </div>
    )
}