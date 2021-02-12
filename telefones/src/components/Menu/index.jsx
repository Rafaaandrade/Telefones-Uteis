import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IMAGES from './../../assets/images/avatar.png';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useStyles } from './styles';

const MenuUI = () => {
  const [choice, setChoice] = useState(null);
  const open = Boolean(choice);
  const styles = useStyles();

  const handleClick = (event) => {
    setChoice(event.currentTarget);
  };

  const handleClose = () => {
    setChoice(null);
  };

  return (
    <div className={styles.menu}>
      <Avatar src={IMAGES} />
      <IconButton onClick={handleClick}>
        <ArrowDropDownIcon />
      </IconButton>
      <Menu
        keepMounted
        choice={choice}
        open={open}
        onClose={handleClose}
        anchorEl={choice}
      >
        <MenuItem>Gerenciar usuários</MenuItem>
        <MenuItem>Sair</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuUI;
