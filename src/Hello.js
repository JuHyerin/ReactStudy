import React from 'react';

function Hello({color, name, isSpecial}) {
    return (
        <div style={{color}}>
            {isSpecial && <b>*</b>}
            안녕 {name}
        </div>
    );
}
Hello.defaultProps = {
    name: '이름 없음'
}
export  default Hello;