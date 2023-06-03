import React,{useState} from "react";
import { NavLink,useLocation } from "react-router-dom";
import { AuthState } from "../Context/Auth";
import { useNavigate } from "react-router-dom";
import {VscEyeClosed,VscEye} from "react-icons/vsc";
import {DataState} from "../Context/DataContext";
import {guestLoginhandler,loginHandler} from "../Services/AuthService";