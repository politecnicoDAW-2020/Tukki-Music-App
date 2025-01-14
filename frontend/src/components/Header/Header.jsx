import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ColorModeButton from './LightDarkMode';
import useUser from '../../hooks/useUser';
import routes from '../../constants/routes';
import { Link, useHistory } from 'react-router-dom';
import Spinner from '../Spinner';
import './header.css';
import { getCurrentUser, makePetition } from '../../services/user.service';

export default function Header(){

    const notStarted = 'not_started';

    const history = useHistory();
    const colorTheme = localStorage.getItem('themePreference');
    const [isDarkMode,setDarkMode] = useState(colorTheme === 'dark');
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const { user, logout, setCurrentUser } = useUser();

    useEffect(_ => {
        setLoading(true);
        getCurrentUser().then(user => {
            setCurrentUser(user);
            setLoading(false);
        });
    },[history])

    const handleLogout = _ => {
        logout();
        history.push('/login');
    }

    const saveThemePreference = _ => {
        const savedPreference = localStorage.getItem('themePreference');
        const themePreference = savedPreference === 'dark' ? 'light' : 'dark';
        localStorage.setItem('themePreference', themePreference);
    }

    const handleDarkMode = _ => {
        setDarkMode(!isDarkMode);
        document.body.classList.toggle('dark');
        saveThemePreference();
    }    

    const handlerMakePetition = async () => {
        setLoading(true);
        const { user } = await makePetition()
        setCurrentUser(user).then(_ => {
            setLoading(false);
        });
    }

    const handleSearch = _ => {
        if(search !== ''){
            history.push(`/user/search/${search}`);
        }
    }

    return (
        <div className="flex flex-space-btw fixed head-bg">
            <div className="head-first">
                <form className="flex flex-center search-form" onSubmit={ handleSearch }>
                    <input type="text" className="search-input" placeholder="Buscador..." value={ search } onChange={ ev => setSearch(ev.target.value) }/>
                    <button type="submit" className="search-button"><SearchIcon/></button>
                </form>
            </div>
            <div>
                <Link to={ routes.home } className="btn btn-router">Inicio</Link>
                { user.type === 'artist'
                        ? <Link to={ routes.artistmenu } className="btn btn-router">Menu Artista</Link> 
                        : ''
                }
                
                
            </div>
                    { loading && <Spinner/> }
            <div className="flex flex-center user">
                    <img className="user-img" src={ user.img || 'http://localhost:3000/user.png'}></img>
                    <span>{ user.name }</span>
                    <div className="user-options">
                        <ColorModeButton isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}/>
                        { user.petition_status === notStarted 
                        ? <button type="button" className="btn btn-primary" onClick={ handlerMakePetition }>¡Quiero ser Artista!</button>
                        : ''
                }
                        <button className="link" onClick={ handleLogout }>Cerrar Sesión</button>
                    </div>
            </div>
        </div>
    )
}