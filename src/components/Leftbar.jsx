import { AccountBox, Article, ExpandLess, ExpandMore, Group, Home, Inbox, ModeNight, Person, Settings, StarBorder, Storefront } from '@mui/icons-material'
import { Box, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { useState } from 'react'

const Leftbar = () => {
    const [mode, setMode] = useState('light')
    const [open, setOpen] = useState({ "7": false });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedCollapseIndex, setSelectedCollapseIndex] = useState({ "7": null });

    const handleOpen = (index) => {
        if (index in open)
            setOpen({ ...open, [index]: !open[index] });
        else {
            let updatedSelectedCollapseIndexes = {}
            Object.keys(selectedCollapseIndex).forEach(e => {
                updatedSelectedCollapseIndexes[e] = null
            })
            setSelectedCollapseIndex(updatedSelectedCollapseIndexes);
        }
    };

    const handleListItemClick = (event, index) => {
        //Here we are not using event now, but later it can be used, so leaving it as it is.
        setSelectedIndex(index);
        handleOpen(index);
    };

    const handleCollapseItemClick = async (event, collapseIndex, subIndex) => {
        setSelectedIndex(collapseIndex);
        //.css-1tes541-MuiListItem-root.Mui-selected
        //.css-1tes541-MuiListItem-root.Mui-selected
        await setSelectedCollapseIndex({ ...selectedCollapseIndex, [collapseIndex.toString()]: subIndex });
    }

    return (
        <Box p="7px 0px 0px 10px" sx={{ display: { xs: "none", sm: "block",} }}>
            <Box>
                <List>
                    <ListItem disablePadding selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Storefront />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding selected={selectedIndex === 5}
                        onClick={(event) => handleListItemClick(event, 5)}>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding selected={selectedIndex === 6}
                        onClick={(event) => handleListItemClick(event, 6)}>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding selected={selectedIndex === 7}
                        onClick={(event) => handleListItemClick(event, 7)}>
                        <ListItemButton component="a" href="#inbox">
                            <ListItemIcon>
                                <Inbox />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                            {open["7"] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={open["7"]} timeout="auto" unmountOnExit>
                        <List component="div">
                            <ListItem disablePadding selected={selectedCollapseIndex["7"] === 0} onClick={(event) => handleCollapseItemClick(event, 7, 0)}>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Starred" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list" >
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Leftbar