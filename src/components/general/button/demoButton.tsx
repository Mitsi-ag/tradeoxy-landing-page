import React from 'react';

interface IDemoButtonProps {
    link: string;
}

const DemoButton = (props: IDemoButtonProps): JSX.Element => {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" 
           style={{ backgroundColor: '#31bcb4' }} 
           className="hover:bg-blue-700 text-white font-bold py-3 px-8 rounded inline-block">
            Demo
        </a>
    );
}

export default DemoButton;
