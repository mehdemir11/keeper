import React from "react";

const currentYear = new Date();

export default function Footer(){
    return <footer>
        Copyright © {currentYear.getFullYear()}
    </footer>
}