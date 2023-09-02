import { useContext } from "react"

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

// import useAuth from "../hooks/useAuth"

import { UserContext } from "../context/UserContext"
import { useState } from "react";
import RegistrarCita from "../pages//Registrarcita";

import { RiMenuLine } from "react-icons/ri";
/*
export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Mostrar modal con uso de portal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}
*/
const LayoutBase = (props) => {
  //const { logout,isAuth } = useAuth();
  const { user, cleanUser } = useContext(UserContext);
  const [activo, setActivo] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [navbarOpen, setNavbarOpen] = useState(false);

  //console.log('showModal',showModal)
  const handleLogout = () => {
    //logout();
    //alert("hola");
    //console.log("handlelog",user)
    cleanUser();
    navigate("/login");
  };
  //console.log("user",user)
  //alert('showModal',showModal)


  const onClose = () => {
    alert("onClose");
    <PortalExample />
    console.log('showModal', showModal)
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <header className="bg-indigo-700 pt-4 lg:pt-0 flex flex-wrap items-center justify-between w-screen">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center w-screen lg:pb-2">
          <div className="flex justify-between lg:w-auto lg:static lg:block lg:justify-start w-full px-20 pb-2 lg:pb-0">
            <h1 className="font-bold text-stone-100">Odontologia</h1>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <RiMenuLine />
            </button>
          </div>
          <nav className={"lg:flex flex-grow items-center sm:gap-3 text-stone-100 bg-sky-700 lg:bg-transparent mt-2 w-full px-20" + (navbarOpen ? " flex" : " hidden")}>
            <ul className="flex flex-col list-none gap-5 py-3 lg:flex-row lg:ml-auto items-start">
              {user?.usuario && (
                <>
                  <Link to="/conocenos">Usuarios</Link>
                  <Link to="/laboratorio">Clientes</Link>
                  <Link to="/contacto" >Citas</Link>
                  <button onClick={handleLogout}>Logout</button>
                </>
              )}

              {!user?.usuario && (
                <>
                  <Link to="/" id="Inicio">Inicio</Link>
                  <Link to="/login">Iniciar Sesión</Link>
                  <Link to="/registrarcita">
                    <RegistrarCita datos={''} titulo={'Registrar Cita'} colordefondo={'red'} recargarDatos={''} />
                  </Link>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>

      <main className="my-6">
        <div className="mx-auto">{props.children}</div>
      </main>

      {/*  {showModal? 
      <p>hola</p>
        :<p>holax</p>
        
      } */}

    </>

  );
};

export default LayoutBase;

