import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";

import { Context } from "../store/appContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import "../../styles/contacts.css";
import ryanGosling from "../../img/ryan-gosling.jpg";


export const Contacts = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    useEffect(() => {
        actions.loadContacts()
      }, []);

    function ContactCards () {
        return(
            store.contacts.map(contact => (
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
                                <button className="invisibleButton" onClick={async () => {
                                    await actions.setUpdateId(contact?.id);
                                    navigate("/update-contact");
                                }}>
                                    <FontAwesomeIcon icon={faPencil} />
                                </button>
                            </div>
                            <div className="contactModifyIcons">
                                <button className="invisibleButton" onClick={() => {
                                    actions.deleteContact(contact?.id);
                                    window.location.reload();
                                }}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )
    }

    return(
        <div className="container-fluid">
            <div className="row mx-5">
                <div className="col-12 d-flex justify-content-end py-3">
                    <button className="addContactButton" onClick={() => {navigate("/add-new-contact")}}>Add new contact</button>
                </div>
                <ContactCards/>
            </div>
        </div>
    )
}