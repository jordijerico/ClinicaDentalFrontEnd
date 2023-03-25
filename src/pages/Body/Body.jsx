import { React } from "react";
import { Routes, Route } from "react-router-dom";
import { AdminPanel } from "../AdminPanel/AdminPanel";
import { Appointment } from "../Appointments/Appointment";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { NewAppointment } from "../NewAppointment/NewAppointment";
import { Profile } from "../Profile/Profile";
import { Register } from "../Register/Register";

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/appointments" element={<Appointment />} />
                <Route path="/newappointment" element={<NewAppointment />} />


            </Routes>
        </>
    );
};
