import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import "../../styles/contacts.css";
import ryanGosling from "../../img/ryan-gosling.jpg";


export const Contacts = () => {

    const [contacts, setContacts] = useState();
    
    async function GetContacts () {
        await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/juana', {method: "GET"})
        .then (response => {
            return response.json();
        })
        .then(data => {
            setContacts(data);
            console.log("data: ",data[0].address)
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        GetContacts()
      }, []);

    function ContactCards () {
        let contactInfo = contacts;
        return(
            contactInfo.map(contact => {
                <div className="col-12 contactCard">
                    <div className="row">
                        <div className="col-3 d-flex justify-content-center py-3">
                            <img src={ryanGosling} className="img-fluid contactImage"></img>
                        </div>
                        <div className="col-7">
                            <h2 className="mb-4">{contact?.full_name}</h2>
                            <div className="d-flex">
                                <div className="contactCardInfoIcons">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <p>{contact?.address}</p>
                            </div>
                            <div className="d-flex">
                                <div className="contactCardInfoIcons">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <p>{contact?.phone}</p>
                            </div>
                            <div className="d-flex">
                                <div className="contactCardInfoIcons">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <p>{contact?.email}</p>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-center">
                            <div className="contactModifyIcons">
                                <FontAwesomeIcon icon={faPencil} />
                            </div>
                            <div className="contactModifyIcons">
                                <FontAwesomeIcon icon={faTrashCan} />
                            </div>
                        </div>
                    </div>
                </div>
            })
        )
    }

    return(
        <div className="container-fluid">
            <div className="row mx-5">
                <div className="col-12 d-flex justify-content-end py-3">
                    <button className="addContactButton">Add new contact</button>
                </div>
            </div>
        </div>
    )
}