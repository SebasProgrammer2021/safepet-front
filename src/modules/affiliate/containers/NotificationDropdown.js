import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Popover } from "@mui/material";
import { deleteUser } from "../../../api/endpoints/afiliados/deleteAffiliate";
import SmallModal from "../../../components/modals/SmallModal";
import ModalForm from "../../../components/modals/ModalForm";

const NotificationDropdown = ({ cedula }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [data, setData] = useState();
  const [showModal, setShowModal] = React.useState({
    active: false,
    message: "",
    title: "",
  });
  const [modalAffiliateInfo, setModalAffiliateInfo] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    deleteUser(cedula)
      .then((response) => {
        setAnchorEl(null);
        response.error
          ? setShowModal({
              active: true,
              title: "Atención",
              message: "Error al eliminar el usuario",
            })
          : setShowModal({
              active: true,
              title: "Atención",
              message: `${response?.data} exitosamente`,
            });
      })
      .catch((error) => {
        setShowModal({
          active: true,
          title: "Atención",
          message: "Error en la petición",
        });
      });
    setData("");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button aria-describedby={id} onClick={handleClick}>
        <i className="fas fa-ellipsis-v"></i>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        sx={{ display: "flex" }}
      >
        <Button onClick={handleDelete} sx={{ p: 2 }}>
          Eliminar Afiliado
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setModalAffiliateInfo(true);
            setAnchorEl(null);
          }}
          sx={{ p: 2 }}
        >
          Ver Información
        </Button>
      </Popover>
      {showModal.active && (
        <SmallModal
          data={data}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
      {modalAffiliateInfo && (
        <ModalForm id={cedula} setModalAffiliateInfo={setModalAffiliateInfo} />
      )}
    </>
  );
};

export default NotificationDropdown;

NotificationDropdown.propTypes = {
  cedula: PropTypes.number,
};
