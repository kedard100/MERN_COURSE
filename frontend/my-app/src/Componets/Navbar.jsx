import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";  // Import CSS module

function Navbar() {
    return (
        <nav className={styles.navbar}>
          <div 
          className={styles["nav-links"]}>
          
            <NavLink
             to="/"
             
             className={({ isActive }) => isActive ? `${styles["nav-link"]} ${styles["text-color"]} ${styles.active}` : styles["nav-link"]}
           
            >
              Home
            </NavLink>
            <NavLink to="/about" 
             className={({ isActive }) => isActive ? `${styles["nav-link"]} ${styles.active}` : styles["nav-link"]}
    
           
            
             >
              About
            </NavLink>
            <NavLink to="/contact" 
            className={styles["nav-link"]} 
            activeClassName={styles.active}
            >
              Contact
            </NavLink>
          </div>
        </nav>
      );
}

export default Navbar